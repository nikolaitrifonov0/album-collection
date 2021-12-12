using AlbumCollection.Data;
using AlbumCollection.Data.Models;
using back_end.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

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
            var toAdd = new Review
            {
                UserId = model.UserId,
                AlbumId = model.AlbumId,
                Comment = model.Comment,
                Rating = model.Rating,
                AddedOnDate = DateTime.Now
            };

            data.Reviews.Add(toAdd);
            data.SaveChanges();

            return Ok(toAdd);
        }

        [Route("getall/{id}")]
        public IActionResult GetAll(string id)
        {
            var result = data.Reviews.Where(ua => ua.AlbumId == id)
            .Select(ua => new ReviewModel
            {
                Id = ua.Id,
                AlbumId = id,
                Comment = ua.Comment,
                Rating = ua.Rating,
                UserId = ua.UserId,
                Username = ua.User.UserName,
                Liked = ua.Likes.Select(l => l.UserId).ToList()
            })
            .ToList();

            return Ok(result);
        }

        [Route("getone/{id}")]
        public IActionResult GetOne(int id)
        {
            var result = data.Reviews.Where(ua => ua.Id == id)
            .Select(ua => new ReviewModel
            {
                Id = ua.Id,
                AlbumId = ua.AlbumId,
                Comment = ua.Comment,
                Rating = ua.Rating,
                UserId = ua.UserId,
                Username = ua.User.UserName
            })
            .First();

            return Ok(result);
        }

        [HttpPut]
        [Route("edit/{id}")]
        public IActionResult EditReview(ReviewModel model)
        {
            var result = data.Reviews.Where(ua => ua.Id == model.Id).First();

            result.Rating = model.Rating;
            result.Comment = model.Comment;

            data.SaveChanges();

            return Ok(result);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult DeleteReview(int id)
        {
            var result = data.Reviews.Where(ua => ua.Id == id).First();
            data.Reviews.Remove(result);

            data.SaveChanges();

            return Ok(result);
        }

        [Route("collection/{id}")]
        public IActionResult Collection(string id)
        {
            var result = data.Reviews.Where(ua => ua.UserId == id)
                .Select(ua => ua.AlbumId).Distinct().ToList();

            return Ok(result);
        }

        [HttpPost]
        [Route("like")]
        public IActionResult Like(LikeReviewModel model)
        {
            if (data.Likes.Any(l => l.ReviewId == model.ReviewId && l.UserId == model.UserId))
            {
                var toDelete = data.Likes.Where(l => l.ReviewId == model.ReviewId && l.UserId == model.UserId).First();

                data.Likes.Remove(toDelete);

                data.SaveChanges();

                return Ok(toDelete);
            }

            var like = new Like
            {
                UserId = model.UserId,
                ReviewId = model.ReviewId
            };

            data.Likes.Add(like);

            data.SaveChanges();

            return Ok(like);
        }
    }
}
