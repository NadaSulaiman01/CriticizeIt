using CriticizeIt.Models;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CriticizeIt.Configurations
{
    public class CompanyEntityTypeConfiguration : IEntityTypeConfiguration<Company>
    {
        public void Configure (EntityTypeBuilder<Company> builder)
        {
          //  builder.Property(c => c.Category).IsRequired();
        }
    }
}
