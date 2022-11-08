using CriticizeIt.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CriticizeIt.Configurations
{
    public class ApplicationUserEntityTypeConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            builder.HasIndex(u => u.Email).IsUnique();
        }
    }
}
