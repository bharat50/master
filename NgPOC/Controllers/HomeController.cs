﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NgPOC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            //test test repo b15 b india 1444
            ViewBag.Title = "Home Page";
            return View();
        }
    }
}
