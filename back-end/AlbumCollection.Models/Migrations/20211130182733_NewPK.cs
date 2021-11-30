using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollection.Data.Migrations
{
    public partial class NewPK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserAlbums",
                table: "UserAlbums");

            migrationBuilder.AlterColumn<string>(
                name: "AlbumId",
                table: "UserAlbums",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "UserAlbums",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserAlbums",
                table: "UserAlbums",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_UserAlbums_UserId",
                table: "UserAlbums",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_UserAlbums",
                table: "UserAlbums");

            migrationBuilder.DropIndex(
                name: "IX_UserAlbums_UserId",
                table: "UserAlbums");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "UserAlbums");

            migrationBuilder.AlterColumn<string>(
                name: "AlbumId",
                table: "UserAlbums",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserAlbums",
                table: "UserAlbums",
                columns: new[] { "UserId", "AlbumId" });
        }
    }
}
