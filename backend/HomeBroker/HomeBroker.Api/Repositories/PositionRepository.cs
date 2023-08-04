using HomeBroker.Api.Models;

namespace HomeBroker.Api.Repositories
{
    public class PositionRepository : IPositionRepository
    {
        public UserPosition[] GetPositions()
        {
            return new UserPosition[]
            {
                new UserPosition { Symbol = "PETR4", Amount = 2, CurrentPrice = 28.44m },
                new UserPosition { Symbol = "SANB11", Amount = 3, CurrentPrice = 40.77m }
            };
        }
    }
}
