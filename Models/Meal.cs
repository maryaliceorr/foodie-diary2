using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodieDiary2.Models
{
    public class Meal
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string MealName { get; set; }
        public DateTime Date { get; set; }
        public int MealTypeId { get; set; }
        public string MealType { get; set; }
        public int RestaurantId { get; set; }
    }
}
