using System.ComponentModel.DataAnnotations;

namespace CriticizeIt.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        //public string UserId { get; set; }
        //public int CompanyId { get; set; }
        public string Job { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public DateTime TimeCreated { get; set; } = DateTime.UtcNow;
        public int TotalUpvotes { get; set; }
        public ApplicationUser User { get; set; }
        public Company Company { get; set; }
        public List<Upvote>? Upvotes { get; set; }



    }
}
