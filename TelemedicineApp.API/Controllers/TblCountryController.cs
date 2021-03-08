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
    public class TblCountryController : Controller
    {

        private readonly IUnitOfWork _unitOfWork;
        readonly IMapper _imapper;
        public TblCountryController(IUnitOfWork unitOfWork, IMapper imapper)
        {

            _unitOfWork = unitOfWork;
            _imapper = imapper;
        }

        [HttpGet("TblCountry")]
        public IActionResult get()
        {
            try
            {
                var TblCountry = _unitOfWork.tblCountry.GetAll();
                return Ok(TblCountry);
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
        [HttpPost("TblCountry")]
        public IActionResult Post([FromBody] TblCountryModel TblCountryModel)
        {
            try
            {
                var TblCountry = _unitOfWork.tblCountry.GetAll();
                return Ok(TblCountry);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCountryController, Function : Post()  : {ex}");
                return Ok(ex);
            }
        }


        [HttpPut("TblCountry")]
        public IActionResult Put([FromBody] TblCountryModel TblCountryModel)
        {
            try
            {
                var TblCountry = _unitOfWork.tblCountry.GetAll();
                return Ok(TblCountry);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCountryController, Function : Put() : {ex}");
                return Ok(ex);
            }
        }

        [HttpPut("TblCountry/{id}")]
        public IActionResult UpdateSizes(Guid id, [FromBody] TblCountryModel TblCountryModel)
        {
            if (ModelState.IsValid)
            {
                if (TblCountryModel == null)
                    return BadRequest($"{nameof(TblCountryModel)} cannot be null");

                if (id != TblCountryModel.ID)
                    return BadRequest("Conflicting Sizes id in parameter and model data");
                tblCountry TblCountry = _unitOfWork.tblCountry.GetById(id);
                if (TblCountry.Name != TblCountryModel.Name)
                {
                    var Exist = _unitOfWork.tblCountry.GetAll().Where(x => x.Name == TblCountryModel.Name).FirstOrDefault();
                    if (Exist != null)
                    {
                        var response1 = new
                        {
                            Success = false,
                            Message = "TblCountry Name already Exist.",
                        };
                        return Ok(response1);
                    }
                }
                if (TblCountry == null)
                    return NotFound(id);
                _imapper.Map<TblCountryModel, tblCountry>(TblCountryModel, TblCountry);
                try
                {
                    _unitOfWork.tblCountry.Update(TblCountry);
                    return Ok();
                }
                catch (Exception ex)
                {
                    Utilities.QuickLog($"Failed to TblCountryController, Function :Put() : {ex}");
                    return BadRequest("Error Occurred");
                }

            }
            return BadRequest(ModelState);
        }


        [HttpDelete("TblCountry/{id}")]
        public IActionResult Delete(Guid id)
        {
            try
            {
                tblCountry TblCountry = _unitOfWork.tblCountry.GetById(id);
                _unitOfWork.tblCountry.Delete(TblCountry);
                return Ok();
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCountryController, Function :Delete() : {ex}");
                return BadRequest("Error Occurred");
            }
        }

        [HttpGet("TblCountry/{id}")]
        public IActionResult GetbyID(Guid id)
        {
            try
            {
                tblCountry TblCountry = _unitOfWork.tblCountry.GetById(id);
                return Ok(TblCountry);
            }
            catch (Exception ex)
            {
                Utilities.QuickLog($"Failed to TblCountryController, Function : GetbyID  {ex}");
                return BadRequest("Error Occurred");
            }
        }
    }
}
