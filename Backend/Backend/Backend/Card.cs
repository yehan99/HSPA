using System.ComponentModel.DataAnnotations;

namespace Backend
{
    public class Card
    {
        public int Id { get; set; }
        [StringLength(100)]
        public string CardHoldername { get; set; } = string.Empty;
        [StringLength(20)]
        public string CardNumber { get; set; } = string.Empty;
        public int ExpiryMonth { get; set; }
        public int ExpiryYear { get; set; }
        public int CVC { get; set; }
    }
}
