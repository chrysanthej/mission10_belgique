using mission10_bowling.Models;

namespace mission10_bowling.Models
{
    public class EFBowlerRepository : IBowlerRepository
    {
        private BowlingLeagueContext _bowlercontext;

        public EFBowlerRepository(BowlingLeagueContext temp)
        {
            _bowlercontext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _bowlercontext.Bowlers;
        public IEnumerable<Team> Teams => _bowlercontext.Teams;
    }
}
