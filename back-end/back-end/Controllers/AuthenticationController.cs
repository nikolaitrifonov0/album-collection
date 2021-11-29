using back_end.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<IdentityUser> userManager;
        private readonly SignInManager<IdentityUser> signInManager;

        public AuthenticationController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register(AuthenticationModel model)
        {
            string id = string.Empty;
            var user = new IdentityUser()
            {
                Email = model.Username,
                UserName = model.Username
            };

            await userManager.CreateAsync(user, model.Password);
            var result = new AuthenticatedUserModel() { Id = user.Id };        

            return Created("Registered", result);
    }        

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login(AuthenticationModel model)
        {
            var user = await signInManager.PasswordSignInAsync(model.Username, model.Password, false, false);

            if (user.Succeeded)
            {
                string id = (await userManager.FindByNameAsync(model.Username)).Id;
                var result = new AuthenticatedUserModel() { Id = id };

                return Ok(result);
            }

            return NotFound();            
        }
    }
}
