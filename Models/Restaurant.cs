using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodieDiary2.Models
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string RestaurantName { get; set; }
        public string Notes { get; set; }
        public bool OpenStatus { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string StateAbbr { get; set; }
        public int StateAbbrId { get; set; }
        public int ZipCode { get; set; }
        public Decimal Longitude { get; set; }
        public Decimal Latitude { get; set; }
        public string FoodGenre { get; set; }
        public int FoodGenreId { get; set; }
        public long Telephone { get; set; }
        public string WebsiteURL { get; set; }
    }
}
