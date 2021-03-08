using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TelemedicineApp.Database.Models
{
    public class tblStateCity:IAuditableEntity
    {
        [Key]
        public Guid ID { get; set; }
        public Guid StateId { get; set; }
        public Guid CityId { get; set; }
    }
}
