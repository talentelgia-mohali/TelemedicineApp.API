using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelemedicineApp.Database.Models
{
    public class tblCountryState:IAuditableEntity
    {
        [Key]
        public Guid ID { get; set; }
        public Guid StateCityId { get; set; }
    }
}
