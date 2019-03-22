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
        List<TaskViewModel> tvm = new List<TaskViewModel>
        {
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
            new TaskViewModel
            {
                Id = 1,
                CreateTime = new DateTime(),
                NormResolutionTime = new DateTime(),
                Manager = "Manager",
                Title = "Loream"
            },
        };
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        [OutputCache(Location = OutputCacheLocation.None)]
        public JsonResult GetTasks()
        {
            return Json(tvm, JsonRequestBehavior.AllowGet);
        }
    }
}