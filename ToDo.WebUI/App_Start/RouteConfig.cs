using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace ToDo.WebUI
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
               name: "Task",
               url: "task/{action}",
               defaults: new { controller = "Task", action = "Index" }
            );
            routes.MapRoute(
               name: "Manager",
               url: "manager/{action}",
               defaults: new { controller = "Manager", action = "Index" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "ToDo", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
