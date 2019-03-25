using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;
using ToDo.WebUI.Models.ToDo;

namespace ToDo.WebUI.Controllers
{
    [RoutePrefix("Task")]
    public class TaskController : Controller
    {
        public static IList<TaskViewModel> tvm = new List<TaskViewModel>
        {
            new TaskViewModel
            {
                Id = 1,
                CreateTime = DateTime.Now,
                NormResolutionTime = DateTime.Now.Add(TimeSpan.FromHours(1)),
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
                NormResolutionTime = new DateTime(2012,2,3,1,2,3),
                Manager = "",
                Title = "Service"
            },
            new TaskViewModel
            {
                Id = 4,
                CreateTime = DateTime.Now,
                NormResolutionTime = DateTime.Now.Add(TimeSpan.FromHours(6)),
                Manager = "",
                Title = "Service"
            },
            new TaskViewModel
            {
                Id = 4,
                CreateTime = DateTime.Now,
                NormResolutionTime = DateTime.Now.Add(TimeSpan.FromHours(6)),
                Manager = "",
                Title = "Service"
            }
        };
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        [Route("GetTasks")]
        public JsonResult GetTasks()
        {
            string json = JsonConvert.SerializeObject(tvm, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        [Route("GetTask/Filtered")]
        public JsonResult GetFiltered()
        {
            var nowDate = DateTime.Now;
            var task = tvm.Where(x => nowDate >= x.NormResolutionTime.Subtract(TimeSpan.FromHours(2))).ToList();

            string json = JsonConvert.SerializeObject(task, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        [Route("GetTask/{id?}")]
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
        [Route("AddManagerTask")]
        public ActionResult AddManagerTask(int id, string manager)
        {
            var task = tvm.FirstOrDefault(x => x.Id == id);
            task.Manager = manager;
            return Json(JsonConvert.SerializeObject(task), JsonRequestBehavior.AllowGet);
        }
    }
}