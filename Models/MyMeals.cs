using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodieDiary2.Models
{
    public class MyMeals
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MealName { get; set; }
        public DateTime Date { get; set; }
        public string MealTypeName { get; set; }
        public string RestaurantName { get; set; }
        public string Notes { get; set; }
        public string OpenStatus { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string StateAbbr { get; set; }
        public string FoodGenreName { get; set; }




    }
}
