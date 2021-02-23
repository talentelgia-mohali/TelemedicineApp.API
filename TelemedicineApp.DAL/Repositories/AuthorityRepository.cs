using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database;
using TelemedicineApp.Database.Models;
namespace TelemedicineApp.DAL.Repositories
{

    public class AuthorityRepository : Repository<tblUser>, IAuthorityRepository
    {
        private TeleMedicineContext _appContext => (TeleMedicineContext)_context;
        public AuthorityRepository(TeleMedicineContext context) : base(context) { }
        // <summary>
        /// Get User by Email and Password  
        /// </summary>
        /// <returns></returns>
        public tblUser GetUserbyEmailandPassword(string Email, String Password)
        {
            return _appContext.tblUsers.Where(x => x.Email.ToLower() == Email && x.Password == Password).FirstOrDefault();

        }
        // <summary>
        /// Get User by Email 
        /// </summary>
        /// <returns></returns>
        public tblUser GetUsersbyEmail(string Email)
        {
            return _appContext.tblUsers.Where(x => x.Email.ToLower() == Email).FirstOrDefault();

        }  // <summary>
        /// Get User by Password 
        /// </summary>
        /// <returns></returns>
        public tblUser GetUsersbyPassword(string Password)
        {
            return _appContext.tblUsers.Where(x => x.Password == Password).FirstOrDefault();

        }

    }
}
