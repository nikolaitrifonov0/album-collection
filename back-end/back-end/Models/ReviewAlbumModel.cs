using System.ComponentModel.DataAnnotations;

namespace back_end.Models
{
    public class ReviewAlbumModel
    {
        public string UserId { get; set; }
        public string AlbumId { get; set; }
        public string Comment { get; set; }
        [Range(1, 10)]
        public int Rating { get; set; }
    }
}
