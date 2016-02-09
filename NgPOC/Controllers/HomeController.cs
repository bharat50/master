using System;
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
            //test test repo b114 b1
            ViewBag.Title = "Home Page";
            return View();
        }
    }
}
