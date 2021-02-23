
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
       // IRepository<tblUser> tblUser { get; }
        IAuthorityRepository tblUser { get; }

        int SaveChanges();
    }
}
