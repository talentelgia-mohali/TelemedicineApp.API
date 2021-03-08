using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelemedicineApp.Database.Models
{
    public class tblRole :IAuditableEntity
    {
        [Key]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string RoleCode { get; set; }
        
    }
}
