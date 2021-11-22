using System.Collections.Generic;

namespace AlbumCollection.Data.Models
{
    public class Album
    {
        public string Id { get; set; }
        public ICollection<UserAlbum> UsersAlbums { get; set; }
    }
}
