using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angular2Core.Models
{
    public class Model
    {
    }
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        { }

        public DbSet<Tenant> Tenants { get; set; }
        public DbSet<Feature> Features { get; set; }
        public DbSet<TenantFeature> TenantFeatures { get; set; }
        
    }

    public class Tenant
    {
        public int TenantId { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }
    }

    public class Feature
    {
        public int FeatureId { get; set; }
        public string Name { get; set; }
    }
    public class TenantFeature
    {
        public int TenantFeatureId { get; set; }
        public int FeatureId { get; set; }
        public int TenantId { get; set; }

        public Tenant Tenant { get; set; }
        public Feature Feature { get; set; }
    }
}
