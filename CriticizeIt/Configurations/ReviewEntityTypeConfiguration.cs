using CriticizeIt.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CriticizeIt.Configurations
{
    public class ReviewEntityTypeConfiguration : IEntityTypeConfiguration<Review>
    {
        public void Configure(EntityTypeBuilder<Review> builder)
        {
            //  builder.Property(c => c.Category).IsRequired();
            
        }
    }
}
