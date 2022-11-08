using System.ComponentModel.DataAnnotations;

namespace CriticizeIt.DTOs
{
    public class ForgetPasswordDTO
    {
        [Required]
        public string Email { get; set; } = string.Empty;
    }
}
