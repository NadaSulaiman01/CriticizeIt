using CriticizeIt.DTOs;
using CriticizeIt.Models;
using CriticizeIt.Services.AuthenticationService;
using CriticizeIt.Services.MailService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CriticizeIt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService authService;
        private readonly IMailService mailService;

        public AuthController(IAuthService authService, IMailService mailService)
        {
            this.authService = authService;
            this.mailService = mailService;
        }
        [HttpPost("Register")]
        public async Task<ActionResult<ServiceResponse<LoginResponseDTO>>> RegisterAsync(RegisterRequestDTO request)
        {
            var result = await authService.RegisterUserAsync(request);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }

        }
        [HttpPost("Login")]
        public async Task<ActionResult<ServiceResponse<LoginResponseDTO>>> LoginUserAsync(LoginRequestDTO request)
        {
            var result = await authService.LoginUserAsync(request);
            if (result.Success)
            {

               
                if (!string.IsNullOrEmpty(result.Data.RefreshToken))
                {
                    SetRefreshTokenInCookie(result.Data.RefreshToken, result.Data.RefreshTokenExpiration);
                }
                return Ok(result);

            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpGet("ConfirmEmail")]
        public async Task<ActionResult<ServiceResponse<int>>> ConfirmEmail(string userId, String token)
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(token))
            {
                return NotFound();
            }
            var result = await authService.ConfirmEmailAsync(userId, token);
            if (result.Success)
            {
                return Ok(result);

            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPost("ForgetPassword")]
        public async Task<ActionResult<ServiceResponse<int>>> ForgetPasswordAsync(ForgetPasswordDTO request)
        {
            if (string.IsNullOrEmpty(request.Email))
            {
                return NotFound();
            }
            var result = await authService.ForgetPasswordAsync(request);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }

        }
        [HttpPost("ResetPassword")]
        public async Task<ActionResult<ServiceResponse<int>>> ResetPassword(ResetPasswordRequestDTO request)
        {
            var result = await authService.ResetPasswordAsync(request);
            if (result.Success)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpGet("RefreshToken")]
        public async Task<ActionResult<ServiceResponse<LoginResponseDTO>>> RefreshTokenAsync()
        {
            var refreshToken = Request.Cookies[key: "refreshToken"];
            var result = await authService.RefreshTokenAsync(refreshToken);
            if (!result.Success)
            {
                return BadRequest(result);
            }
            SetRefreshTokenInCookie(result.Data.RefreshToken, result.Data.RefreshTokenExpiration);
            return Ok(result);
        }
        private void SetRefreshTokenInCookie(string refreshToken, DateTime expires)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = expires.ToLocalTime()
            };

            Response.Cookies.Append("refreshToken", refreshToken, cookieOptions);
        }

    }
}
