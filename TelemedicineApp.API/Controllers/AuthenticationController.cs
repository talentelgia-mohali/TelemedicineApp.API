using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TelemedicineApp.Models.Common;

namespace TelemedicineApp.API.Controllers
{
    public class AuthenticationController : Controller
    {
        /// <summary>
        /// Authentication of User
        /// </summary>
        /// <returns>Authenticate or Not</returns>  
        public IActionResult SignIn(SignInModel signInModel)
        {
            List<string> errorMessages;
            if (!ModelState.IsValid)
            {
                errorMessages = GetValidationErrorMessages();
                return Ok(new
                {
                    Success = false,
                    Message = errorMessages
                });
            }

            errorMessages = new List<string>();


            return Ok(new { success = true }); 
        }

        /// <summary>
		/// Gets validation error messages from ModelState
		/// </summary>
		private List<string> GetValidationErrorMessages()
        {
            List<string> errorMessages = new List<string>();
            ModelState.Values.Select(m => m.Errors).ToList().ForEach(m => m.ToList().ForEach(error => errorMessages.Add(error.ErrorMessage)));
            return errorMessages;
        }
    }
}
