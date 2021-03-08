using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TelemedicineApp.Database.Models;
using TelemedicineApp.Models.ViewModels.Authentication;

namespace TelemedicineApp.API.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<tblUser, RegisterModel>().ReverseMap();
           
        }
    }
}
