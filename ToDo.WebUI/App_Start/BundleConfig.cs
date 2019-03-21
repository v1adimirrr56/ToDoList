using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace ToDo.WebUI.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/react-dev")
                .Include(
                    "~/Content/Scripts/React/React-dom-dev.js",
                    "~/Content/Scripts/React/React-dev.js"
                    ));

            bundles.Add(new BabelBundle("~/bundles/ToDo")
                .Include("~/Content/Scripts/React/ToDo/ToDo.jsx"));

            BundleTable.EnableOptimizations = true;
        }
    }
}