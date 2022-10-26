namespace CriticizeIt.Models
{
    public class Rating
    {
        public int Rate { get; set; }
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }
        public Company Company { get; set; }
        public int CompanyId { get; set; }
    }
}
