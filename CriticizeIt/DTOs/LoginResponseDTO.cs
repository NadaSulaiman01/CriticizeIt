using System.Text.Json.Serialization;

namespace CriticizeIt.DTOs
{
    public class LoginResponseDTO
    {
        public string Role { get; set; } = "User";
        public bool EmailConfirmed { get; set; }
        public string Token { get; set; }
        public DateTime? TokenExpiration { get; set; }

        // [JsonIgnore]
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiration { get; set; }

    }
}
