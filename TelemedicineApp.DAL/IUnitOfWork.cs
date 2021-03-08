
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database.Models;

namespace TelemedicineApp.DAL
{
    public interface IUnitOfWork
    {
        IAuthorityRepository tblUser { get; }
        IRepository<tblCity> tblCity { get; }
        IRepository<tblCountry> tblCountry { get; }
        IRepository<tblCountryState> tblCountryState { get; }
        IRepository<tblRole> tblRole { get; }
        IRepository<tblStateCity> tblStateCity { get; }
        IRepository<tblState> tblState { get; }
        IRepository<tblStatus> tblStatus { get; }



        int SaveChanges();
    }
}
