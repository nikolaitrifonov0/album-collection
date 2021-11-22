using AlbumCollection.Data;
using back_end.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Identity.Web;

namespace back_end
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<AlbumCollectionContext>(options =>
                options.UseSqlServer(
                    Configuration.GetConnectionString("DefaultConnection")))
                .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddMicrosoftIdentityWebApi(Configuration.GetSection("AzureAd"));

            services.AddControllers();
        }
        
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.PrepareDatabase();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection()
            .UseRouting()
            .UseAuthentication()
            .UseAuthorization()
            .UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
