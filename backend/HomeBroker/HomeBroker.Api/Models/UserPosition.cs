namespace HomeBroker.Api.Models
{
    public class UserPosition
    {
        public string Symbol { get; set; }
        public int Amount { get; set; }
        public decimal CurrentPrice { get; set; }
    }
}
