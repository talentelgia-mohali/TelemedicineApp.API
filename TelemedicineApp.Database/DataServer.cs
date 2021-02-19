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
    internal class DataServer : DbContext
    {
        //string strConnection = ConfigurationManager.ConnectionStrings["dbconnection"].ConnectionString;
        string strConnection = @"Data Source=LAPTOP-HAPT2KIV\SQLEXPRESS;Initial Catalog=TelemedicineDB;User Id=sa;Password=123456789;Integrated Security=True;Connect Timeout=30;Encrypt=False;";
         
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {                        
            optionsBuilder.UseSqlServer(strConnection);
        }

        public DbSet<tblUser> tblUsers { get; set; } 
    }
}


