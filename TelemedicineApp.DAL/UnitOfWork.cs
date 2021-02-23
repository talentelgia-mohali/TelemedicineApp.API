using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelemedicineApp.DAL.Repositories;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database;
using TelemedicineApp.Database.Models;

namespace TelemedicineApp.DAL
{
	public class UnitOfWork : IUnitOfWork
	{
		readonly TeleMedicineContext _context;

	    //private IRepository<tblUser> _tblUser;
		private IAuthorityRepository _tblUser;
		public UnitOfWork(TeleMedicineContext context)
		{
			_context = context;
		}

		public IAuthorityRepository tblUser
        {

			get
			{
				if (_tblUser == null)
					_tblUser = new AuthorityRepository(_context);

				return _tblUser;
			}

		}
		//public IRepository<tblUser> tblUser
		//{
		//	get
		//	{
		//		if (_tblUser == null)
		//			_tblUser = new Repository<tblUser>(_context);

		//		return _tblUser;
		//	}
		//}


		public int SaveChanges()
		{
			return _context.SaveChanges();
		}
	}
}
