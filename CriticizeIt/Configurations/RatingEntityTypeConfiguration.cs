using CriticizeIt.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CriticizeIt.Configurations
{
    public class RatingEntityTypeConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            //  builder.Property(c => c.Category).IsRequired();
            builder.HasKey(r => new { r.UserId, r.CompanyId });
        }
    }
}
