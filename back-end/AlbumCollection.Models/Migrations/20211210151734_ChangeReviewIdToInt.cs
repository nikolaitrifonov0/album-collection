using Microsoft.EntityFrameworkCore.Migrations;

namespace AlbumCollection.Data.Migrations
{
    public partial class ChangeReviewIdToInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Reviews_ReviewId1",
                table: "Likes");

            migrationBuilder.DropIndex(
                name: "IX_Likes_ReviewId1",
                table: "Likes");

            migrationBuilder.DropColumn(
                name: "ReviewId1",
                table: "Likes");

            migrationBuilder.AlterColumn<int>(
                name: "ReviewId",
                table: "Likes",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Likes_ReviewId",
                table: "Likes",
                column: "ReviewId");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Reviews_ReviewId",
                table: "Likes",
                column: "ReviewId",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Likes_Reviews_ReviewId",
                table: "Likes");

            migrationBuilder.DropIndex(
                name: "IX_Likes_ReviewId",
                table: "Likes");

            migrationBuilder.AlterColumn<string>(
                name: "ReviewId",
                table: "Likes",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "ReviewId1",
                table: "Likes",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Likes_ReviewId1",
                table: "Likes",
                column: "ReviewId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Likes_Reviews_ReviewId1",
                table: "Likes",
                column: "ReviewId1",
                principalTable: "Reviews",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
