﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDo.WebUI.Models.ToDo
{
    public class ManagerViewModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Position { get; set; }
    }
}