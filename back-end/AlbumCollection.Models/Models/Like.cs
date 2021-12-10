using Microsoft.AspNetCore.Identity;

namespace AlbumCollection.Data.Models
{
    public class Like
    {
        public int Id { get; set; }
        public int ReviewId { get; set; }
        public Review Review { get; set; }
        public string UserId { get; set; }
        public IdentityUser User { get; set; }
    }
}
