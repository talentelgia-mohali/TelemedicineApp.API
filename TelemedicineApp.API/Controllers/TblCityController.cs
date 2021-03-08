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
    public class TblCityController : Controller
    {
        
        private readonly IUnitOfWork _unitOfWork;
        readonly IMapper _imapper;
        public TblCityController(IUnitOfWork unitOfWork, IMapper imapper)
        {

            _unitOfWork = unitOfWork;
            _imapper = imapper;
        }

        [HttpGet("TblCity")]
        public IActionResult get()
        {
            try
            {
              var tblCity=  _unitOfWork.tblCity.GetAll();
              return Ok(tblCity);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCityController, Function : get()  : {ex}");
                return Ok(ex);
            }
         }
         /// <summary>
         /// 
         /// </summary>
         /// <returns></returns> 
        [HttpPost("TblCity")]
        public IActionResult Post([FromBody] TblCityModel TblCityModel)
        {
            try
            {
                var tblCity = _unitOfWork.tblCity.GetAll();
                return Ok(tblCity);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCityController, Function : Post()  : {ex}");
                return Ok(ex);
            }
        }


        [HttpPut("TblCity")]
        public IActionResult Put([FromBody] TblCityModel TblCityModel)
        {
            try
            {
                var tblCity = _unitOfWork.tblCity.GetAll();
                return Ok(tblCity);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCityController, Function : Put() : {ex}");
                return Ok(ex);
            }
        }

        [HttpPut("TblCity/{id}")]
        public IActionResult UpdateSizes(Guid id, [FromBody] TblCityModel TblCityModel)
        {
            if (ModelState.IsValid)
            {
                if (TblCityModel == null)
                    return BadRequest($"{nameof(TblCityModel)} cannot be null");

                if (id != TblCityModel.ID)
                    return BadRequest("Conflicting Sizes id in parameter and model data");
                tblCity TblCity = _unitOfWork.tblCity.GetById(id);
                if (TblCity.Name != TblCityModel.Name)
                {
                    var Exist = _unitOfWork.tblCity.GetAll().Where(x => x.Name == TblCityModel.Name).FirstOrDefault();
                    if (Exist!=null)
                    {
                        var response1 = new
                        {
                            Success = false,
                            Message = "tblCity Name already Exist.",
                        };
                        return Ok(response1);
                    }
                }
                if (TblCity == null)
                    return NotFound(id);
                _imapper.Map<TblCityModel, tblCity>(TblCityModel, TblCity);
                try
                {
                    _unitOfWork.tblCity.Update(TblCity);
                    return Ok();
                }
                catch (Exception ex)
                {
                    Utilities.QuickLog($"Failed to TblCityController, Function :Put() : {ex}");
                    return BadRequest("Error Occurred");
                }

            }
            return BadRequest(ModelState);
        }


        [HttpDelete("TblCity/{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                tblCity TblCity = _unitOfWork.tblCity.GetById(id);
                _unitOfWork.tblCity.Delete(TblCity);
                return Ok();
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCityController, Function :Delete() : {ex}");
                return BadRequest("Error Occurred");
            }
        }

        [HttpGet("TblCity/{id}")]
        public IActionResult GetbyID(Guid id)
        {
            try
            {
                tblCity TblCity = _unitOfWork.tblCity.GetById(id);
                return Ok(TblCity);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCityController, Function :GetbyID() : {ex}");
                return BadRequest("Error Occurred");
            }
        }
    }  
}
