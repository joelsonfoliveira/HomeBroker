using HomeBroker.Api.Models;

namespace HomeBroker.Api.Controllers
{
    public class UserPositionResponse
    {
        public decimal CheckingAccountAmount { get; set; }
        public UserPosition[] Positions { get; set; }
        public decimal Consolidated { get; set; }
    }
}
