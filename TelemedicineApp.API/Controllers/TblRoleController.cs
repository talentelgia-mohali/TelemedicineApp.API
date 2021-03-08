using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TelemedicineApp.API.Helpers;
using TelemedicineApp.DAL;
using TelemedicineApp.Models.ViewModels.Authentication;
using TelemedicineApp.Database.Models;

namespace TelemedicineApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TblRoleController : Controller
    {

        private readonly IUnitOfWork _unitOfWork;
        readonly IMapper _imapper;
        public TblRoleController(IUnitOfWork unitOfWork, IMapper imapper)
        {

            _unitOfWork = unitOfWork;
            _imapper = imapper;
        }

        [HttpGet("TblRole")]
        public IActionResult get()
        {
            try
            {
                var TblRole = _unitOfWork.tblRole.GetAll();
                return Ok(TblRole);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblRoleController, Function : get()  : {ex}");
                return Ok(ex);
            }
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns> 
        [HttpPost("TblRole")]
        public IActionResult Post([FromBody] TblRoleModel TblRoleModel)
        {
            try
            {
                var TblRole = _unitOfWork.tblRole.GetAll();
                return Ok(TblRole);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblRoleController, Function : Post()  : {ex}");
                return Ok(ex);
            }
        }


        [HttpPut("TblRole")]
        public IActionResult Put([FromBody] TblRoleModel TblRoleModel)
        {
            try
            {
                var TblRole = _unitOfWork.tblRole.GetAll();
                return Ok(TblRole);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblRoleController, Function : Put() : {ex}");
                return Ok(ex);
            }
        }

        [HttpPut("TblRole/{id}")]
        public IActionResult UpdateSizes(Guid id, [FromBody] TblRoleModel TblRoleModel)
        {
            if (ModelState.IsValid)
            {
                if (TblRoleModel == null)
                    return BadRequest($"{nameof(TblRoleModel)} cannot be null");

                if (id != TblRoleModel.ID)
                    return BadRequest("Conflicting Sizes id in parameter and model data");
                tblRole TblRole = _unitOfWork.tblRole.GetById(id);
                if (TblRole.Name != TblRoleModel.Name)
                {
                    var Exist = _unitOfWork.tblRole.GetAll().Where(x => x.Name == TblRoleModel.Name).FirstOrDefault();
                    if (Exist != null)
                    {
                        var response1 = new
                        {
                            Success = false,
                            Message = "TblRole Name already Exist.",
                        };
                        return Ok(response1);
                    }
                }
                if (TblRole == null)
                    return NotFound(id);
                _imapper.Map<TblRoleModel, tblRole>(TblRoleModel, TblRole);
                try
                {
                    _unitOfWork.tblRole.Update(TblRole);
                    return Ok();
                }
                catch (Exception ex)
                {
                    Utilities.QuickLog($"Failed to TblRoleController, Function :Put() : {ex}");
                    return BadRequest("Error Occurred");
                }

            }
            return BadRequest(ModelState);
        }


        [HttpDelete("TblRole/{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                tblRole TblRole = _unitOfWork.tblRole.GetById(id);
                _unitOfWork.tblRole.Delete(TblRole);
                return Ok();
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblRoleController, Function :Delete() : {ex}");
                return BadRequest("Error Occurred");
            }
        }

        [HttpGet("TblRole/{id}")]
        public IActionResult GetbyID(Guid id)
        {
            try
            {
                tblRole TblRole = _unitOfWork.tblRole.GetById(id);
                return Ok(TblRole);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblRoleController, Function :GetbyID() : {ex}");
                return BadRequest("Error Occurred");
            }
        }
    }
}
