using System.ComponentModel.DataAnnotations;

namespace Backend
{
    public class InspectionType
    { 
        public int Id { get; set; }
        [StringLength(20)]
        public string InspectioName { get; set; } = string.Empty;
        
    }
}
