using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace MusicVoterWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicController: ControllerBase
    {
        [HttpGet]
        public List<Music> Read()
        {
            using(var context = new MusicVoterContext())
            {
                return context.Music.ToList();
            }

        }

        [HttpPost]
        public Music Create([FromBody] Music music)
        {
            using(var context = new MusicVoterContext())
            {
                context.Music.Add(music);
                context.SaveChanges();

                return music;
            }
        }

        [HttpPut]
        public void Update([FromBody] Music music)
        {
            using(var context = new MusicVoterContext())
            {
                context.Music.Update(music);
                context.SaveChanges();
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using(var context = new MusicVoterContext())
            {
                var musicToDelete = GetMusicById(id);
                context.Music.Remove(musicToDelete);
                context.SaveChanges();
            }
        }


        [HttpGet("{id}")]
        public Music GetMusicById(int id)
        {
            using(var context = new MusicVoterContext())
            {
                return context.Music.Find(id);
            }
        }
    }
}