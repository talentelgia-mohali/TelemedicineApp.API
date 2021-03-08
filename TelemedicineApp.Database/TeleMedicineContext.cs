using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TelemedicineApp.Database.Models;

namespace TelemedicineApp.Database
{
    public class TeleMedicineContext : DbContext
    {
        //string strConnection = ConfigurationManager.ConnectionStrings["dbconnection"].ConnectionString;
        string strConnection = @"Data Source=HP\SQLEXPRESS;Initial Catalog=TelemedicineDB;Integrated Security=True;";
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {                        
            optionsBuilder.UseSqlServer(strConnection);
        }
        public TeleMedicineContext(DbContextOptions options) : base(options)
        { }
        public DbSet<tblUser> tblUsers { get; set; }
        public DbSet<tblCity> tblCity { get; set; }
        public DbSet<tblCountry> tblCountry { get; set; }
        public DbSet<tblCountryState> tblCountryState { get; set; }
        public DbSet<tblRole> tblRole { get; set; }
        public DbSet<tblState> tblState { get; set; }
        public DbSet<tblStatus> tblStatus { get; set; }
        public DbSet<tblStateCity> tblStateCity { get; set; }
        
    }
}


