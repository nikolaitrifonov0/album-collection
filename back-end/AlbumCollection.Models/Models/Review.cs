using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AlbumCollection.Data.Models
{
    public class Review
    {
        private const int maxRating = 10;

        public int Id { get; set; }
        [Required]
        public string AlbumId { get; set; }

        [Required]
        public string UserId { get; set; }
        public IdentityUser User { get; set; }
        public string Comment { get; set; }
        [MaxLength(maxRating)]
        public int? Rating { get; set; }
        public DateTime AddedOnDate { get; set; }
        public ICollection<Like> Likes { get; set; }
    }
}
