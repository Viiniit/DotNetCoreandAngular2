using Angular2Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular2Core.Data.ViewModels
{
    public class TenantFeaturesViewModel
    {
        public Tenant Tenant { get; set; }
        public List<Feature> Features { get; set; }
    }
}
