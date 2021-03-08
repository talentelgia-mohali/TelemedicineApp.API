using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TelemedicineApp.Models.Common;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database.Models;
using TelemedicineApp.DAL;
using TelemedicineApp.API.Helpers;
using TelemedicineApp.Models.ViewModels.Authentication;
using AutoMapper;

namespace TelemedicineApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
       // private readonly IRepository<tblUser> _tblUser;
        private readonly IUnitOfWork _unitOfWork;
        readonly IMapper _imapper;
        public AuthenticationController(IUnitOfWork unitOfWork, IMapper imapper)
        {
            
            _unitOfWork = unitOfWork;
            _imapper = imapper;
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
                        Message = SucessMessage.SuccessUserLogin,
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
                            Message = ErrorMessage.errEmail,
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
                                Message = ErrorMessage.errPassword,
                                status = false,
                            };
                            return Ok(response);
                        }
                        else    
                        {
                            var response = new
                            {
                                Message = ErrorMessage.errPasswordorEmail,
                                status = false,
                            };
                            return Ok(response);
                        }
                    }
                }
             }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to Authentication Controller, Function : SignIn : {ex}");
                return Ok(ex);
            }
        }

        public IActionResult Register([FromBody] RegisterModel RegisterModel)
        {
            try
            {
                tblUser _tblUser = _imapper.Map<tblUser>(RegisterModel);
                _tblUser.ID = Guid.NewGuid();
                Guid tblUserID = _unitOfWork.tblUser.Addtbluser(_tblUser);
                return Ok();
            }
            catch(Exception ex)
            {
                Utilities.QuickLog($"Failed to Authentication Controller, Function : Register : {ex}");
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
