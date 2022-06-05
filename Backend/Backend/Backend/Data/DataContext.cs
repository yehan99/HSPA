using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class DataContext : DbContext
    {
        public  DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Inspection> Inspections { get; set; }

        public DbSet<InspectionType> InspectionType { get; set; }

        public DbSet<Status> Status { get; set; }
         
    }
}
