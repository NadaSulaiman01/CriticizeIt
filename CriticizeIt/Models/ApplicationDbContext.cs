using CriticizeIt.Configurations;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CriticizeIt.Models
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            new RatingEntityTypeConfiguration().Configure(builder.Entity<Rating>());
            new UpvoteEntityTypeConfiguration().Configure(builder.Entity<Upvote>());
        }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    //new CompanyEntityTypeConfiguration().Configure(builder.Entity<Company>());
        //    builder.Entity<ApplicationUser>()
        //        .HasMany(u => u.Reviews)
        //        .WithOne();
        //    builder.Entity<Company>()
        //        .HasMany(u => u.Reviews)
        //        .WithOne();
        //}
        public DbSet<Company> Companies { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Salary> Salaries { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<Upvote> Upvotes { get; set; }
       // public DbSet<RefreshToken> RefreshTokens { get; set; }



    }
}
