namespace CriticizeIt.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Gender { get; set; } = string.Empty;
        public string JobTitle { get; set; } = string.Empty;
        public List<Review>? Reviews { get; set; }
        public List<Rating>? Ratings { get; set; }
        public List<Salary>? Salaries { get; set; }
        public List<Request>? Requests { get; set; }
        public List<Upvote>? Upvotes { get; set; }
        public List<RefreshToken>? RefreshTokens { get; set; }
    }
}
