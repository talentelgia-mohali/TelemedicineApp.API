﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TelemedicineApp.API.Controllers
{
    public class TblStatusController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}