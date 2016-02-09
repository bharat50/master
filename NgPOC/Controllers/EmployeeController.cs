using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Net;
using System.Data;
using System.Web.Http;

namespace NgPOC.Controllers
{
    public class EmployeeController : ApiController
    {
        private NgPOCdbEntities1 db = new NgPOCdbEntities1();
        //new branch added
        // GET api/Employee
        public IEnumerable<tbl_employee> Get()
        {
            var empcoll = db.tbl_employee.ToList();
            return empcoll;
        }
        
        // GET api/Employee/5
        public tbl_employee Get(int id)
        {
            tbl_employee emp = db.tbl_employee.Find(id);
            if (emp == null)
            {
                return null;
            }
            return emp;
        }
        // POST api/Employee
        public void Post(tbl_employee emp)
        {
            db.tbl_employee.Add(emp);
            db.SaveChanges();

        }
        // PUT api/Employee/5
        public void Put(int id, tbl_employee emp)
        {
            if (ModelState.IsValid)
            {
                db.Entry(emp).State = EntityState.Modified;
                db.SaveChanges();
            }
        }
        // DELETE api/Employee/5
        public void Delete(int id)
        {
            tbl_employee temp = db.tbl_employee.Where(x => x.Id == id).FirstOrDefault();
            db.tbl_employee.Remove(temp);
            db.SaveChanges();

        }
        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}




