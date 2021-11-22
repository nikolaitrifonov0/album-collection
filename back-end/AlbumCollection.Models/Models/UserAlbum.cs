using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace AlbumCollection.Data.Models
{
    public class UserAlbum
    {
        private const int maxRating = 10;

        [Required]
        public string AlbumId { get; set; }
        public Album Album { get; set; }
        [Required]
        public string UserId { get; set; }
        public IdentityUser User { get; set; }
        public string Comment { get; set; }
        [MaxLength(maxRating)]
        public int? Rating { get; set; }
    }
}
