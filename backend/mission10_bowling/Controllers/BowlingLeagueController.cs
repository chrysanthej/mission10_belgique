using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mission10_bowling.Models;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace mission10_bowling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        private IBowlerRepository _repository;

        public BowlingLeagueController(IBowlerRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<BowlerTeam> Get()
        {
            var bowlerTeam = from bowler in _repository.Bowlers
                                  join team in _repository.Teams on bowler.TeamId equals team.TeamId
                                  where team.TeamName is "Marlins" or "Sharks"
                                  select new BowlerTeam
                                  {
                                      BowlerId = bowler.BowlerId,
                                      BowlerFirstName = bowler.BowlerFirstName,
                                      BowlerLastName = bowler.BowlerLastName,
                                      BowlerMiddleInit = bowler.BowlerMiddleInit,
                                      BowlerAddress = bowler.BowlerAddress,
                                      BowlerCity = bowler.BowlerCity,
                                      BowlerState = bowler.BowlerState,
                                      BowlerZip = bowler.BowlerZip,
                                      BowlerPhoneNumber = bowler.BowlerPhoneNumber,
                                      TeamName = team.TeamName
                                  };

            var bowlerData1 = bowlerTeam.ToArray();

            return bowlerData1;
        }

    }
}
