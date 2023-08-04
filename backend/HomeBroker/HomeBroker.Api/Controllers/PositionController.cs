using HomeBroker.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace HomeBroker.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PositionController : ControllerBase
    {
        private readonly IPositionRepository _positionRepository;

        public PositionController(IPositionRepository positionRepository)
        {
            _positionRepository = positionRepository;
        }

        [HttpGet]
        [Route("userPosition")]
        public ActionResult<UserPositionResponse> GetUserPosition()
        {
            decimal checkingAccountAmount = 234.00m;
            decimal consolidated = checkingAccountAmount;

            var positions = _positionRepository.GetPositions();

            foreach (var position in positions)
            {
                consolidated += position.Amount * position.CurrentPrice;
            }

            var response = new UserPositionResponse
            {
                CheckingAccountAmount = checkingAccountAmount,
                Positions = positions,
                Consolidated = consolidated
            };

            return Ok(response);
        }
    }
}
