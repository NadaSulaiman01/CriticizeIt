using CriticizeIt.DTOs;
using CriticizeIt.Models;

namespace CriticizeIt.Services.AuthenticationService
{
    public interface IAuthService
    {
        Task<ServiceResponse<LoginResponseDTO>> RegisterUserAsync(RegisterRequestDTO request);
        Task<ServiceResponse<LoginResponseDTO>> LoginUserAsync(LoginRequestDTO request);
        Task<ServiceResponse<int>> ConfirmEmailAsync(string userId, string token);
        Task<ServiceResponse<int>> ForgetPasswordAsync(ForgetPasswordDTO request);
        Task<ServiceResponse<int>> ResetPasswordAsync(ResetPasswordRequestDTO request);
        Task<ServiceResponse<LoginResponseDTO>> RefreshTokenAsync(string refreshToken);
        //Task<ServiceResponse<bool>> RevokeTokenAsync(string refreshToken);
    }
}
