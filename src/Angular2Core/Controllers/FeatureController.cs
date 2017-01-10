using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Core.Data.ViewModels;
using Newtonsoft.Json;
using Angular2Core.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2Core.Controllers
{
    [Route("api/[controller]")]
    public class FeatureController : Controller
    {

        private DatabaseContext _context;

        public FeatureController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Feature> features = null;
            try
            {
                using (_context)
                {
                    features = _context.Features.ToList();
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return new JsonResult(features, DefaultJsonSettings);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Feature tenant = new Feature();
            tenant = _context.Features.Where(i => i.FeatureId == id).FirstOrDefault();
            return new JsonResult(tenant, DefaultJsonSettings);
        }

        // POST api/values
        [HttpPost("AddFeature")]
        public async Task<object> AddFeature([FromBody]Feature feature)
        {
            if (feature.Name == null)
            {
                return BadRequest();
            }

            try
            {
                _context.Features.Add(feature);
                await _context.SaveChangesAsync();
            }
            catch (Exception e)
            {

            }
            return new JsonResult(feature, DefaultJsonSettings);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Feature feature)
        {
            if (feature == null)
            {
                return BadRequest();
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _context.Features.FirstOrDefault(x => x.FeatureId == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.Name = feature.Name;
                            _context.Entry(entityUpdate).State = EntityState.Modified;
                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback();
                        //e.ToString();
                    }
                }
            }
            return new JsonResult(feature, DefaultJsonSettings);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var idToRemove = _context.Features.SingleOrDefault(x => x.FeatureId == id);
                        if (idToRemove != null)
                        {
                            _context.Features.Remove(idToRemove);
                            _context.SaveChanges();
                        }
                        _ctxTransaction.Commit();
                    }
                    catch (Exception e)
                    {
                        _ctxTransaction.Rollback(); e.ToString();
                    }
                }
            }
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
