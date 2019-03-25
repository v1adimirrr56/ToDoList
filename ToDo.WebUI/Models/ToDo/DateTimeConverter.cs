using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ToDo.WebUI.Models.ToDo
{
     internal class DateTimeConverter : IsoDateTimeConverter
    {
        public DateTimeConverter()
        {
            DateTimeFormat = "HH:mm dd-MM-yyyy";
        }
    }
}