using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Core.Models;
using Newtonsoft.Json;
using Angular2Core.Data.ViewModels;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2Core.Controllers
{
    [Route("api/[controller]")]
    public class TenantFeaturesController : Controller
    {

        private DatabaseContext _context;

        public TenantFeaturesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            List<TenantFeaturesViewModel> _TenantFeature = new List<TenantFeaturesViewModel>();

            try
            {
                using (_context)
                {
                  _TenantFeature = _context.TenantFeatures.GroupBy(u => u.TenantId).Select(group => new TenantFeaturesViewModel { Tenant = group.First().Tenant, Features = group.Select(u => u.Feature).ToList() }).ToList();
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return new JsonResult(_TenantFeature, DefaultJsonSettings);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public async Task<object> Post([FromBody]TenantFeature _TenantFeature)
        {
            if (_TenantFeature.TenantId == 0)
            {
                return BadRequest();
            }

            try
            {
                var isExists = _context.TenantFeatures.Where(u => u.FeatureId == _TenantFeature.FeatureId && u.TenantId == _TenantFeature.TenantId).FirstOrDefault();
                if (isExists == null)
                {
                    _context.TenantFeatures.Add(_TenantFeature);
                    await _context.SaveChangesAsync();
                }
            }
            catch (Exception e)
            {

            }
            return new JsonResult(_TenantFeature, DefaultJsonSettings);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
        private JsonSerializerSettings DefaultJsonSettings
        {
            get
            {
                return new JsonSerializerSettings()
                {
                    Formatting = Formatting.Indented
                };
            }
        }

    }
}
