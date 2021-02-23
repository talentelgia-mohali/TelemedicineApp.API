using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace TelemedicineApp.Models.Common
{
    public class SignInModel
    {
		[Required]		
		public string Email { get; set; }

		[Required]
		[DataType(DataType.Password)]
		[RegularExpression(@"^.*(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\(\)_\-+=]).*$", ErrorMessage = "password err")]
		[StringLength(20, MinimumLength = 8, ErrorMessage = "length err")]
		public string Password { get; set; }

		public bool RememberMe { get; set; }
	}
}
