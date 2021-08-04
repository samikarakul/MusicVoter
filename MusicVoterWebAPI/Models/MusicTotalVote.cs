using System;
using System.ComponentModel.DataAnnotations;

namespace MusicVoterWebAPI
{
    public class MusicTotalVote
    {
        [Key]
        public int MusicTotalVoteId { get; set; }
        public int MusicId { get; set; }
        public int TotalVote { get; set; }
    }
}