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

        public AuthenticationController(UserManager<IdentityUser> userManager)
        {
            this.userManager = userManager;
        }

        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterModel model)
        {
            string id = string.Empty;

            Task
                .Run(async () =>
                {
                    var user = new IdentityUser()
                    {
                        Email = model.username,
                        UserName = model.username
                    };

                    await userManager.CreateAsync(user, model.password);
                    id = user.Id;
                })
                .GetAwaiter()
                .GetResult();

            return Created("Registed", id);
        }
    }
}
