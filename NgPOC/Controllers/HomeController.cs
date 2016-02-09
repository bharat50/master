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
            // changes in master branch 
            // changes done in branch 1
            //// changes done in branch  from repo
            ViewBag.Title = "Home Page";
           
            return View();
        }
    }
}
