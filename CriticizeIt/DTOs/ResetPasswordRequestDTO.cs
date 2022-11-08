namespace CriticizeIt.DTOs
{
    public class ResetPasswordRequestDTO
    {
        public string Email { get; set; } = String.Empty;
        public string Token { get; set; } = string.Empty;
        public string Password { get; set; } = String.Empty;
    }
}
