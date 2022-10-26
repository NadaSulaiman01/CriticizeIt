namespace CriticizeIt.Models
{
    public class Salary
    {
        public int SalaryId { get; set; }
        public string Job { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty;
        public int Years { get; set; }
        public int SalaryAmount { get; set; }
        public DateTime DateSubmitted { get; set; } = DateTime.UtcNow;
        public ApplicationUser User { get; set; }
        public Company Company { get; set; }

    }
}
