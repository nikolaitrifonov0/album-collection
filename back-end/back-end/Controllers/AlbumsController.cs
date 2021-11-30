using AlbumCollection.Data;
using AlbumCollection.Data.Models;
using back_end.Models;
using Microsoft.AspNetCore.Mvc;
using System;

namespace back_end.Controllers
{
    [Route("albums")]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
        private readonly AlbumCollectionContext data;

        public AlbumsController(AlbumCollectionContext data)
        {
            this.data = data;
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
    }
}
