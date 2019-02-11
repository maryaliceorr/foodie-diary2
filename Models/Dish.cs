using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodieDiary2.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public int MealId { get; set; }
        public string DishName { get; set; }
        public string DishTypeName { get; set; }
        public int DishTypeId { get; set; }
        public string CourseName { get; set; }
        public int CourseId { get; set; }
        public string Ingredient { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public int Aroma { get; set; }
        public int Appearance { get; set; }
        public int Creativity { get; set; }
        public int Taste { get; set; }
        public decimal TotalScore { get; set; }
        public string Picture { get; set; }
        public string MealName { get; set; }
        public int MealTypeId { get; set; }
        public string MealTypeName { get; set; }
        public DateTime Date { get; set; }
        public int RestaurantId { get; set; }
        public string RestaurantName { get; set; }
        public string City { get; set; }
        public string StateAbbr { get; set; }
        public string FoodGenreName { get; set; }
        public int FoodGenreId { get; set; }
        public string Notes { get; set; }
        public bool OpenStatus { get; set; }
        public string Address { get; set; }
        public int ZipCode { get; set; }
        public long Telephone { get; set; }
        public string Website { get; set; }
        public string StateAbbrId { get; set; }

    }
}
