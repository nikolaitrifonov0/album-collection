using AlbumCollection.Data;
using AlbumCollection.Data.Models;
using back_end.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly AlbumCollectionContext data;
        private readonly UserManager<IdentityUser> userManager;

        public AlbumsController(AlbumCollectionContext data, UserManager<IdentityUser> userManager)
        {
            this.data = data;
            this.userManager = userManager;
        }

        [HttpPost]
        [Route("review")]
        public IActionResult Review(ReviewAlbumModel model)
        {
            var toAdd = new UserAlbum
            {
                UserId = model.UserId,
                AlbumId = model.AlbumId,
                Comment = model.Comment,
                Rating = model.Rating,
                AddedOnDate = DateTime.Now
            };

            data.UserAlbums.Add(toAdd);
            data.SaveChanges();

            return Ok(toAdd);
        }

        [Route("reviews/{id}")]
        public IActionResult Reviews(string id)
        {
            var result = data.UserAlbums.Where(ua => ua.AlbumId == id)
            .Select(ua => new ReviewModel
            {
                Id = ua.Id,
                AlbumId = id,
                Comment = ua.Comment,
                Rating = ua.Rating,
                Username = ua.User.UserName
            })
            .ToList();

            return Ok(result);
        }
    }
}
