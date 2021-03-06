﻿using System;
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
        public int ZipCode { get; set; }
        public Decimal Longitude { get; set; }
        public Decimal Latitude { get; set; }
        public string FoodGenreId { get; set; }
        public string Telephone { get; set; }
        public string Website { get; set; }
        public string StateAbbrId { get; set; }
    }
}
