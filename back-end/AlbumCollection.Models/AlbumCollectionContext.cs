using AlbumCollection.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AlbumCollection.Data
{
    public class AlbumCollectionContext : IdentityDbContext
    {
        public AlbumCollectionContext() {}

        public AlbumCollectionContext(DbContextOptions<AlbumCollectionContext> options) : base(options) {}
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Like> Likes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseSqlServer(@"Server=.\SQLEXPRESS;Database=AlbumsCollection;Integrated Security=True;");
            }

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Review>()
                .HasOne<IdentityUser>(r => r.User);

            base.OnModelCreating(modelBuilder);
        }
    }
}
