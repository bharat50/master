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
            // deleteing all comments from repo in master
            // changes in master branch 1 
            // branch 1 changes
            ViewBag.Title = "Home Page";
           
            return View();
        }
    }
}
