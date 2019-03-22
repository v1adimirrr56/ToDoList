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
    public class TaskController : Controller
    {
        public static List<TaskViewModel> tvm = new List<TaskViewModel>
        {
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(2012,2,3,1,2,3),
                NormResolutionTime = new DateTime(2012,2,3,2,3,4),
                Manager = "",
                Title = "Incident"
            },
            new TaskViewModel
            {
                Id = 2,
                CreateTime = new DateTime(2012,2,3,1,2,3),
                NormResolutionTime = new DateTime(2016,2,3,4,2,3),
                Manager = "",
                Title = "Problem"
            },
            new TaskViewModel
            {
                Id = 3,
                CreateTime = new DateTime(2018,10,2,3,4,5),
                NormResolutionTime = new DateTime(),
                Manager = "",
                Title = "Service"
            }
        };
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult ReadTask(int? id)
        {
            var task = tvm.FirstOrDefault(x => x.Id == id);
            if (task == null)
            {
                return HttpNotFound();
            }
            return View(task);
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        public JsonResult GetTasks()
        {
            return Json(JsonConvert.SerializeObject(tvm), JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        public JsonResult GetTask(int? id)
        {
            var task = tvm.FirstOrDefault(x => x.Id == id);
            if (task == null)
            {
                return Json(HttpNotFound());
            }
            return Json(JsonConvert.SerializeObject(task), JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult AddManagerTask(int id, string manager)
        {
            var task = tvm.FirstOrDefault(x => x.Id == id);
            task.Manager = manager;
            return Json(JsonConvert.SerializeObject(task), JsonRequestBehavior.AllowGet);
        }
    }
}