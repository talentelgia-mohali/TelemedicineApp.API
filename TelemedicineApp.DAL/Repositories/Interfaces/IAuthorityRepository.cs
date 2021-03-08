using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelemedicineApp.Database.Models;

namespace TelemedicineApp.DAL.Repositories.Interfaces
{
    public interface IAuthorityRepository
    {
        tblUser GetUserbyEmailandPassword(string Email, String Password);
        tblUser GetUsersbyEmail(string Password);
        tblUser GetUsersbyPassword(string Password);
        Guid Addtbluser(tblUser tblUser);
    }
}
