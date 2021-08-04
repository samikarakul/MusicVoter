using System;
using System.ComponentModel.DataAnnotations;

namespace MusicVoterWebAPI
{
    public class Music
    {
        [Key]
        public int MusicId { get; set; }
        public string MusicName { get; set; }
        public string PerformerName { get; set; }
        public string UserId { get; set; }
    }
}