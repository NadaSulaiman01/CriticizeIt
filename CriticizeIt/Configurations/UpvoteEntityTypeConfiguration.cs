using CriticizeIt.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CriticizeIt.Configurations
{
    public class UpvoteEntityTypeConfiguration : IEntityTypeConfiguration<Upvote>
    {
        public void Configure(EntityTypeBuilder<Upvote> builder)
        {
            //  builder.Property(c => c.Category).IsRequired();
            builder.HasKey(r => new { r.UserId, r.ReviewId });
        }

    }
}
