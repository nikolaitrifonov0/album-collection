using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollection.Data.Migrations
{
    public partial class UserAlbumRelationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddForeignKey(
                name: "FK_UserAlbums_AspNetUsers_UserId",
                table: "UserAlbums",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserAlbums_AspNetUsers_UserId",
                table: "UserAlbums");
        }
    }
}
