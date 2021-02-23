using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TelemedicineApp.Models.Common;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database.Models;
using TelemedicineApp.DAL;

namespace TelemedicineApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
       // private readonly IRepository<tblUser> _tblUser;
        private readonly IUnitOfWork _unitOfWork;
        public AuthenticationController(IUnitOfWork unitOfWork)
        {
            
            _unitOfWork = unitOfWork;
        }
        /// <summary>
        /// Authentication of User
        /// </summary>
        /// <returns>Authenticate or Not</returns>  
        [HttpPost("Login")]
        public IActionResult SignIn([FromBody] SignInModel SignInModel)
        {
            try
            {
                var tblUser = _unitOfWork.tblUser.GetUserbyEmailandPassword(SignInModel.Email, SignInModel.Password);
                if (tblUser != null)
                {
                    var response = new
                    {
                        Message = "User Login Successfully.",
                        status = true,
                    };
                    return Ok(response);
                }
                else
                {
                    if (_unitOfWork.tblUser.GetUsersbyEmail(SignInModel.Email) != null)
                    {
                        var response = new
                        {
                            Message = "Password Is not correct.",
                            status = false,
                        };
                        return Ok(response);
                    }
                    else
                    {
                        if (_unitOfWork.tblUser.GetUsersbyPassword(SignInModel.Password) != null)
                        {
                            var response = new
                            {
                                Message = "Email Is not correct.",
                                status = false,
                            };
                            return Ok(response);
                        }
                        else
                        {
                            var response = new
                            {
                                Message = "Email && Password Is not correct.",
                                status = false,
                            };
                            return Ok(response);
                        }
                    }
                }

            }
            catch (Exception ex)
            {
                //Utilities.QuickLog($"Failed to Customer Controller, Function : SignIn : {ex}");
                return Ok(ex);
            }
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
