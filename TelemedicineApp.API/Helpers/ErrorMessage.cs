using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TelemedicineApp.API.Helpers
{
    public static class ErrorMessage
    {
       
        public const string errPassword = "Password Is not correct.";
        public const string errEmail = "Email Is not correct.";
        public const string errPasswordorEmail = "Email && Password Is not correct.";
    }
    public static class SucessMessage
    {

        public const string SuccessUserLogin = "User Login Successfully.";
        
    }
}
