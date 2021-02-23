using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TelemedicineApp.DAL.Repositories.Interfaces;
using TelemedicineApp.Database;

namespace TelemedicineApp.DAL.Repositories
{    
    public class Repository<T> : IRepository<T>
        where T : class 
    {
        //internal TeleMedicineContext context;
        //internal DbSet<T> dbSet;

        protected TeleMedicineContext _context;
        protected DbSet<T> dbSet;

        public Repository(TeleMedicineContext context)
        {
            _context = context;
            dbSet = _context.Set<T>();
        }

        public bool Add(T entity)
        {
            var query = dbSet.Add(entity);

            if (query != null)
                return true;
            return false;
        }

        public bool Update(T entity)
        {
            dbSet.Attach(entity);
            var query = _context.Entry(entity).State = EntityState.Modified;

            if (query == EntityState.Modified)
                return true;
            return false;
        }
        public bool Delete(T entity)
        {
            var query = dbSet.Remove(entity);

            if (query != null)
                return true;
            return false;
        }
        public bool Delete(Guid id)
        {
            var query = dbSet.Remove(dbSet.Find(id));

            if (query != null)
                return true;
            return false;
        }
        public T GetById(Guid id)
        {
            var query = dbSet.Find(id);

            if (query != null)
                return query;
            else
                return null;
        }
        public ICollection<T> GetAll()
        {
            return dbSet.AsEnumerable<T>().ToList();
        }

        public void Save()
        {
            _context.SaveChanges();
        }
        public void Dispose()
        {
            if (_context != null)
            {
                _context.Dispose();
                _context = null;
            }
        }
    }
}