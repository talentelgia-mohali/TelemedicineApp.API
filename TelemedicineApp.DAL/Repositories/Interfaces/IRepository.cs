using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelemedicineApp.DAL.Repositories.Interfaces
{
    public interface IRepository<T> where T:class
    {
        bool Add(T entity);
        bool Update(T entity);
        bool Delete(T entity);
        bool Delete(Guid id);
        T GetById(Guid id);
        ICollection<T> GetAll();
        void Save();
        void Dispose();

    }
}
