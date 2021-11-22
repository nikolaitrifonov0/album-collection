using AlbumCollection.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AlbumCollection.Data
{
    public class AlbumCollectionContext : IdentityDbContext
    {
        public AlbumCollectionContext()
        {

        }

        public AlbumCollectionContext(DbContextOptions<AlbumCollectionContext> options) : base(options)
        {

        }

        public DbSet<Album> Albums { get; set; }
        public DbSet<UserAlbum> UserAlbums { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder
                    .UseSqlServer(@"Server=.\SQLEXPRESS;Database=AlbumCollection;Integrated Security=True;");
            }

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserAlbum>()
                .HasOne<IdentityUser>(ua => ua.User);
            modelBuilder.Entity<UserAlbum>()
               .HasKey(ua => new { ua.UserId, ua.AlbumId });

            base.OnModelCreating(modelBuilder);
        }
    }
}
