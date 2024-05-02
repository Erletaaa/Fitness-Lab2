using FitnessApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FitnessApp.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public ApplicationDbContext()
        { }

        public DbSet<Users> Users { get; set; }

        public DbSet<Roles> Roles { get; set; }

        public DbSet<Workouts> Workouts { get; set; }

        public DbSet<Categories> Categories { get; set; }

        public DbSet<WorkoutCategories> WorkoutCategories { get; set; }

        public DbSet<Packages> Packages { get; set; }

        public DbSet<Subscription> Subscription { get; set; }

        public DbSet<Notifications> Notifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>().ToTable("Users");
            modelBuilder.Entity<Roles>().ToTable("Roles");
            modelBuilder.Entity<UserRoles>().ToTable("UserRoles");
            modelBuilder.Entity<Workouts>().ToTable("Workouts");
            modelBuilder.Entity<Categories>().ToTable("Categories");
            modelBuilder.Entity<WorkoutCategories>().ToTable("WorkoutCategories");
            modelBuilder.Entity<Packages>().ToTable("Packages");
            modelBuilder.Entity<Subscription>().ToTable("Subscription");
            modelBuilder.Entity<Notifications>().ToTable("Notifications");
        }
    }
}