using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelemedicineApp.Models.ViewModels.Authentication
{
    public class RegisterModel
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public float Age { get; set; }
        public string Address_1 { get; set; }
        public string Address_2 { get; set; }

        public string PhoneNumber { get; set; }
        public Guid CountryId { get; set; }
        public Guid StateId { get; set; }

        public Guid CityId { get; set; }
        public string ZipCode { get; set; }
        public Guid RoleId { get; set; }

        public string Password { get; set; }
        public string PasswordHash { get; set; }

        public DateTime ActivationValidity { get; set; }
    }
}
