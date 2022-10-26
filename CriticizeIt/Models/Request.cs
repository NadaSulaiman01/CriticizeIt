namespace CriticizeIt.Models
{
    public class Request
    {
        public int RequestId { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string CompanyDescription { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public byte[]? Photo { get; set; }
        public DateTime DateSubmitted { get; set; } = DateTime.UtcNow;
        public string Status { get; set; } = string.Empty;
        public ApplicationUser User { get; set; }

    }
}
