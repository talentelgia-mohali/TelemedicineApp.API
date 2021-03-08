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
        private IAuthorityRepository _tblUser;
		private IRepository<tblCity> _tblCity;
		private IRepository<tblCountry> _tblCountry;
		private IRepository<tblRole> _tblRole;
		private IRepository<tblCountryState> _tblCountryState;
		private IRepository<tblState> _tblState;
		private IRepository<tblStatus> _tblStatus;
		private IRepository<tblStateCity> _tblStateCity;

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

        public IRepository<tblCity> tblCity
		{
            get
            {
                if (_tblCity == null)
					_tblCity = new Repository<tblCity>(_context);

                return _tblCity;
            }
        }
		public IRepository<tblCountry> tblCountry
		{
			get
			{
				if (_tblCountry == null)
					_tblCountry = new Repository<tblCountry>(_context);

				return _tblCountry;
			}
		}

		public IRepository<tblCountryState> tblCountryState
		{
			get
			{
				if (_tblCountryState == null)
					_tblCountryState = new Repository<tblCountryState>(_context);

				return _tblCountryState;
			}
		}

		public IRepository<tblRole> tblRole
		{
			get
			{
				if (_tblRole == null)
					_tblRole = new Repository<tblRole>(_context);

				return _tblRole;
			}
		}

		public IRepository<tblStatus> tblStatus
		{
			get
			{
				if (_tblStatus == null)
					_tblStatus = new Repository<tblStatus>(_context);

				return _tblStatus;
			}
		}
		public IRepository<tblStateCity> tblStateCity
		{
			get
			{
				if (_tblStateCity == null)
					_tblStateCity = new Repository<tblStateCity>(_context);

				return _tblStateCity;
			}
		}
		public IRepository<tblState> tblState
		{
			get
			{
				if (_tblState == null)
					_tblState = new Repository<tblState>(_context);

				return _tblState;
			}
		}
		


		public int SaveChanges()
		{
			return _context.SaveChanges();
		}
	}
}
