namespace CriticizeIt.Models
{
    public class Company
    {
        public int CompanyId { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string CompanyDescription { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public byte[]? Photo { get; set; }
        public int ReviewsCount { get; set; }
        public double AverageRating { get; set; }
        public List<Review>? Reviews { get; set; }
        public List<Rating>? Ratings { get; set; }
        public List<Salary>? Salaries { get; set; }

    }
}
