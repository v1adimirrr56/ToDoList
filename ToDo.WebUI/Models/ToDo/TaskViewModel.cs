using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDo.WebUI.Models.ToDo
{
    public class TaskViewModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime CreateTime { get; set; }
        public DateTime NormResolutionTime { get; set; }
        public string Manager { get; set; }
    }
}