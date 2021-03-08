using System;
using System.Collections.Generic;
using System.Text;

namespace TelemedicineApp.Database.Models 
{ 

    public class IAuditableEntity
    {
        public DateTime CreatedAt { get; set; }
        public String CreatedBy { get; set; }
        public DateTime ModifiedAt { get; set; }
        public Guid ModifiedBy { get; set; }
        public Guid StatusId { get; set; }
    }
}     
