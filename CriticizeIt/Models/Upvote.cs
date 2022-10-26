namespace CriticizeIt.Models
{
    public class Upvote
    {
        public int Vote { get; set; }
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }
        public Review Review { get; set; }
        public int ReviewId { get; set; }
    }
}
