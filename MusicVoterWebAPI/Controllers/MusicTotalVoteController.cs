using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace MusicVoterWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicTotalVoteController: ControllerBase
    {
        public List<MusicTotalVote> Read()
        {
            using(var context = new MusicVoterContext())
            {
                return context.MusicTotalVote.ToList();
            }
        }

        [HttpPost]
        public MusicTotalVote Create([FromBody] MusicTotalVote musicTotalVote)
        {
            using(var context = new MusicVoterContext())
            {
                context.MusicTotalVote.Add(musicTotalVote);
                context.SaveChanges();

                return musicTotalVote;
            }
        }

        [HttpPut]
        public void Update([FromBody] MusicTotalVote musicTotalVote)
        {
            using(var context = new MusicVoterContext())
            {
                context.MusicTotalVote.Update(musicTotalVote);
                context.SaveChanges();
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using(var context = new MusicVoterContext())
            {
                var musicTotalVoteToDelete = GetMusicById(id);
                context.MusicTotalVote.Remove(musicTotalVoteToDelete);
                context.SaveChanges();
            }
        }


        [HttpGet("{id}")]
        public MusicTotalVote GetMusicById(int id)
        {
            using(var context = new MusicVoterContext())
            {
                return context.MusicTotalVote.Find(id);
            }
        }
    }
}