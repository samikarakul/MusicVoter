
using Microsoft.EntityFrameworkCore;
using MySql.Data.EntityFrameworkCore;

namespace MusicVoterWebAPI
{
    public class MusicVoterContext :DbContext
    {
        public DbSet<Music> Music { get; set; }
        public DbSet<MusicTotalVote> MusicTotalVote { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL("server=localhost;database=musicvoter;user=user;password=password");
        }
    }
}