using Microsoft.AspNetCore.Identity;

namespace AlbumCollection.Data.Models
{
    public class UserAlbum
    {
        public string Album { get; set; }
        public IdentityUser User { get; set; }
        public string Comment { get; set; }
        public int Rating { get; set; }
    }
}
