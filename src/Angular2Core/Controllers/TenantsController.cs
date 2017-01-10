using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular2Core.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular2Core.Controllers
{
    [Route("api/[controller]")]
    public class TenantsController : Controller
    {
        private DatabaseContext _context;

        public TenantsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            List<Tenant> tenants = null;
            try
            {
                using (_context)
                {
                    tenants = _context.Tenants.ToList();
                }
            }
            catch (Exception ex)
            {
                ex.ToString();
            }
            return new JsonResult(tenants, DefaultJsonSettings);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Tenant tenant = new Tenant();
                tenant = _context.Tenants.Where(i => i.TenantId == id).FirstOrDefault();
            return new JsonResult(tenant, DefaultJsonSettings);

        }

        // POST api/values
        [HttpPost("AddTenant")]
        public async Task<object> AddTenant([FromBody]Tenant tenant)
        {
            if (tenant.Name == null)
            {
                return BadRequest();
            }
        
                try
                {
                    _context.Tenants.Add(tenant);
                    await _context.SaveChangesAsync();
                }
                catch (Exception e)
                {

                }
            return new JsonResult(tenant, DefaultJsonSettings);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Tenant tenant)
        {
            if (tenant == null)
            {
                return BadRequest();
            }
            using (_context)
            {
                using (var _ctxTransaction = _context.Database.BeginTransaction())
                {
                    try
                    {
                        var entityUpdate = _context.Tenants.FirstOrDefault(x => x.TenantId == id);
                        if (entityUpdate != null)
                        {
                            entityUpdate.Name = tenant.Name;
                            entityUpdate.Url = tenant.Url;
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
            return new JsonResult(tenant, DefaultJsonSettings);
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
                        var idToRemove = _context.Tenants.SingleOrDefault(x => x.TenantId == id);
                        if (idToRemove != null)
                        {
                            _context.Tenants.Remove(idToRemove);
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
