using System.ComponentModel.DataAnnotations;

namespace CriticizeIt.DTOs
{
    public class RegisterRequestDTO
    {
        [Required,EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string JobTitle { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public string Password { get; set; }

    }
}
