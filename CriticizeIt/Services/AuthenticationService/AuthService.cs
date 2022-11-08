using CriticizeIt.DTOs;
using CriticizeIt.Models;
using CriticizeIt.Services.MailService;
using MailKit;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Org.BouncyCastle.Asn1.Ocsp;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using IMailService = CriticizeIt.Services.MailService.IMailService;

namespace CriticizeIt.Services.AuthenticationService
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<ApplicationUser> _usermanager;
        private readonly IConfiguration _configuration;
        private readonly IMailService _mailService;

        public AuthService(UserManager<ApplicationUser> usermanager, IConfiguration configuration, IMailService mailService)
        {
            _usermanager = usermanager;
            _configuration = configuration;
            _mailService = mailService;
        }
        public async Task<ServiceResponse<LoginResponseDTO>> RegisterUserAsync(RegisterRequestDTO request)
        {
            
            ServiceResponse<LoginResponseDTO> response = new ServiceResponse<LoginResponseDTO>();
            if (request == null) { throw new NullReferenceException("Register model is null"); }
           

            var identityUser = new ApplicationUser
            {
                Email = request.Email,
                UserName = request.Username,
                Gender = request.Gender,
                JobTitle = request.JobTitle
            };
            
            var result = await _usermanager.CreateAsync(identityUser, request.Password);
            if (result.Succeeded)
            {
                var ConfrimEmailToken = await _usermanager.GenerateEmailConfirmationTokenAsync(identityUser);
                var EncodedEmailToken = Encoding.UTF8.GetBytes(ConfrimEmailToken);
                var ValidEmailToken = WebEncoders.Base64UrlEncode(EncodedEmailToken);
                var Url = $"{_configuration["AppUrl"]}/api/Auth/ConfirmEmail?userid={identityUser.Id}&token={ValidEmailToken}";
                 await _mailService.SendEmailAsync(identityUser.Email, "Welcome to Criticize it!", $"<h1>We are happy to have you with us</h1>" +
                 $"<p>Please confirm your email by <a href='{Url}'>Clicking here</a></p>" );


                LoginResponseDTO loginResponse = new LoginResponseDTO();
                loginResponse.Token = CreateToken(identityUser.Email, identityUser.Id,out DateTime? expiration);
                var refreshToken = GenerateRefreshToken();
                loginResponse.RefreshToken = refreshToken.Token;
                loginResponse.RefreshTokenExpiration = refreshToken.ExpiresOn;
                loginResponse.EmailConfirmed = false;
                loginResponse.TokenExpiration = expiration;

                response.Data = loginResponse;
                identityUser.RefreshTokens = new List<RefreshToken>();
                identityUser.RefreshTokens.Add(refreshToken);

                await _usermanager.UpdateAsync(identityUser);

               


                response.Message = "User created successfully";
                response.Success = true;
                return response;
           
            }
            else
            {
                response.Success = false;
                response.Message = String.Join(" ", result.Errors.Select(e => e.Description).ToList());
                return response;
            }
            

        }
        private string CreateToken(string email, string id, out DateTime? expiration)
        {
            List<Claim> claims = new List<Claim>{
                new Claim("Email",email),
                new Claim(ClaimTypes.NameIdentifier,id)
                // new Claim(ClaimTypes.Role, "role")
            };
            SymmetricSecurityKey key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value));


            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                //Expires = DateTime.Now.AddDays(1),

                SigningCredentials = creds,

                Expires = DateTime.UtcNow.AddHours(1)

            };
             expiration = tokenDescriptor.Expires;
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken token = tokenHandler.CreateToken(tokenDescriptor);


            return tokenHandler.WriteToken(token);
        }
        public async Task<ServiceResponse<LoginResponseDTO>> RefreshTokenAsync(string refreshToken)
        {
            //var responseData = new LoginResponseDTO();
            var response = new ServiceResponse<LoginResponseDTO>();
            var user = await _usermanager.Users.SingleOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == refreshToken));
            if (user == null)
            {
                response.Success = false;
                response.Message = "Invalid refresh token";
                return response;
            }
            //var responseData = new LoginResponseDTO();
            var rtoken = user.RefreshTokens.Single(r => r.Token == refreshToken);
            if (!rtoken.IsActive)
            {
                response.Success = false;
                response.Message = "Iactive refresh token";
                return response;

            }
            rtoken.RevokedOn = DateTime.UtcNow;
            var newRefreshToken = GenerateRefreshToken();
            user.RefreshTokens.Add(newRefreshToken);
            await _usermanager.UpdateAsync(user);
            
            var jwtToken = CreateToken(user.Email, user.Id,out DateTime? expiration );
            var responseData = new LoginResponseDTO();
            responseData.Token = jwtToken;
            responseData.TokenExpiration = expiration;
            responseData.RefreshToken = newRefreshToken.Token;
            responseData.RefreshTokenExpiration = newRefreshToken.ExpiresOn;
            response.Data = responseData;
            response.Success = true;
            response.Message = "New Tokens have been successfully generated";
            return response;

        }
        private RefreshToken GenerateRefreshToken()
        {
            var RandomNumber = new byte[32];
            using var generator = new RNGCryptoServiceProvider();
            generator.GetBytes(RandomNumber);

            //  Console.WriteLine(Convert.ToBase64String(RandomNumber));

            return new RefreshToken
            {
                Token = Convert.ToBase64String(RandomNumber),
                ExpiresOn = DateTime.UtcNow.AddDays(10),
                CreatedOn = DateTime.UtcNow
            };
        }

        public async Task<ServiceResponse<int>> ConfirmEmailAsync(string userId, string token)
        {
            ServiceResponse<int> response = new ServiceResponse<int>();
            var user = await _usermanager.FindByIdAsync(userId);
            if (user == null)
            {
                response.Message = "User not found.";
                response.Success = false;
                return response;
               
            }
            var DecodedToken = WebEncoders.Base64UrlDecode(token);
            string originalToken = Encoding.UTF8.GetString(DecodedToken);

            var result = await _usermanager.ConfirmEmailAsync(user, originalToken);
            if (result.Succeeded)
            {
                response.Message = "Email is successfully confirmed.";
                response.Success = true;
                return response;
            }
            else
            {
                response.Message = "Email is not confirmed.";
                response.Success = false;
                return response;

            }
        }

        public async Task<ServiceResponse<LoginResponseDTO>> LoginUserAsync(LoginRequestDTO request)
        {
          //  if(request.Email.val)
            ServiceResponse <LoginResponseDTO> response = new ServiceResponse<LoginResponseDTO>();
            var user = await _usermanager.FindByEmailAsync(request.Email);

            if (user == null)
            {
                response.Message = "Email doesn't exist.";
                response.Success = false;
                return response;

            }
            var result = await _usermanager.CheckPasswordAsync(user, request.Password);
            if (!result)
            {
                response.Message = "Email or password is incorrect.";
                response.Success = false;
                return response;
            }
            //string role = "User";
            //var userRole = await _usermanager.IsInRoleAsync(user, "Admin");
            //if (userRole)
            //{
            //    role = "Admin";

            //}
            //call claims
            //List<Claim> claims = new List<Claim>{
            //    new Claim("Email",model.Email),
            //    new Claim(ClaimTypes.NameIdentifier,user.Id)
            //};
            
            LoginResponseDTO responseData = new LoginResponseDTO();
            responseData.Token = CreateToken(user.Email, user.Id, out DateTime? expiration);
            responseData.TokenExpiration = expiration;
            responseData.EmailConfirmed = user.EmailConfirmed;
            if (user.RefreshTokens.Any(t => t.IsActive))
            {
                var activeRefreshToken = user.RefreshTokens.FirstOrDefault(t => t.IsActive);
                responseData.RefreshToken = activeRefreshToken.Token;
                responseData.RefreshTokenExpiration = activeRefreshToken.ExpiresOn;
                response.Data = responseData;
                //response.Data.RefreshToken = activeRefreshToken.Token;
                //response.Data.RefreshTokenExpiration = activeRefreshToken.ExpiresOn;

            }
            else
            {
                var refreshToken = GenerateRefreshToken();
                responseData.RefreshToken = refreshToken.Token;
                responseData.RefreshTokenExpiration = refreshToken.ExpiresOn;
                //response.Data.RefreshToken = refreshToken.Token;
                //response.Data.RefreshTokenExpiration = refreshToken.ExpiresOn;
                response.Data = responseData;
                user.RefreshTokens.Add(refreshToken);

                await _usermanager.UpdateAsync(user);
            }
            return response;
            

        }

        public async Task<ServiceResponse<int>> ForgetPasswordAsync(ForgetPasswordDTO request)
        {
            ServiceResponse<int> response = new ServiceResponse<int>();
            var user = await _usermanager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                response.Message = "No user associated with this email.";
                response.Success = false;
                return response;
            }
            var token = await _usermanager.GeneratePasswordResetTokenAsync(user);
            var EncodedToken = Encoding.UTF8.GetBytes(token);
            var ValidToken = WebEncoders.Base64UrlEncode(EncodedToken);
            var Url = $"{_configuration["AppUrl"]}/api/auth/ResetPassword?email={request.Email}&token={ValidToken}";
            await _mailService.SendEmailAsync(request.Email, "Reset password", $"please use this link to reset your password" +
                $"<a href='{Url}'>Click here</a>");

            response.Message = "a link has been sent to this email";
            response.Success = true;
            return response;

        }

        public async Task<ServiceResponse<int>> ResetPasswordAsync(ResetPasswordRequestDTO request)
        {
            ServiceResponse<int> response = new ServiceResponse<int>();
            var user = await _usermanager.FindByEmailAsync(request.Email);
            if (user == null)
            {
                response.Message = "No user associated with this email";
                response.Success = false;
                return response;
               
               
            }
            //if (model.Password != model.ConfrimPassword)
            //{
            //    return new UserManagerResponse
            //    {
            //        IsSuccessful = false,
            //        Message = "Passwords unmatched."
            //    };

            //}
            var DecodedToken = WebEncoders.Base64UrlDecode(request.Token);
            string originalToken = Encoding.UTF8.GetString(DecodedToken);
            var result = await _usermanager.ResetPasswordAsync(user, originalToken, request.Password);
            if (result.Succeeded)
            {
                response.Message = "Password has been successfully changed. You can use it now to log in.";
                response.Success = true;
                return response;
               
            }
            else
            {
                response.Message = String.Join(" ", result.Errors.Select(e => e.Description).ToList());
                response.Success = false;
                return response;
             
            }
        }
    }
}
