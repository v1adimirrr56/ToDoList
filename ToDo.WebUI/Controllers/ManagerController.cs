using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using ToDo.WebUI.Models.ToDo;

namespace ToDo.WebUI.Controllers
{
    public class ManagerController : Controller
    {
        public static List<ManagerViewModel> mvm = new List<ManagerViewModel>
        {
            new ManagerViewModel
            {
                Id = 1, 
                LastName = "Russell",
                MiddleName = "Brandie",
                FirstName = "Matthews",
                Position = "Director"
            },
            new ManagerViewModel
            {
                Id = 2,
                LastName = "Eddie",
                MiddleName = "Wade",
                FirstName = "Duane",
                Position = "Developer"
            },
            new ManagerViewModel
            { 
                Id = 3,
                LastName = "Schmidt",
                MiddleName = "Douglas",
                FirstName = "Marcus",
                Position = "Manager"
            }
        };
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        public JsonResult GetManager(int? id)
        {
            var manager = mvm.FirstOrDefault(x => x.Id == id);
            if (manager == null)
            {
                return Json(HttpNotFound());
            }
            return Json(JsonConvert.SerializeObject(mvm), JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        public JsonResult GetManagers()
        {
            return Json(JsonConvert.SerializeObject(mvm), JsonRequestBehavior.AllowGet);
        }
    }
}