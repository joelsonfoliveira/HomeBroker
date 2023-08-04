using HomeBroker.Api.Models;

namespace HomeBroker.Api.Repositories
{
    public interface IPositionRepository
    {
        UserPosition[] GetPositions();
    }
}
