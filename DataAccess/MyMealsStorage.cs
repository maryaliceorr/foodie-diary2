using Dapper;
using FoodieDiary2.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FoodieDiary2.DataAccess
{
    public class MyMealsStorage
    {
        private readonly string ConnectionString;

        public MyMealsStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }


        public List<MyMeals> GetMyMeals()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<MyMeals>(@"SELECT M.Id,
                                                                M.MealName,
		                                                        M.Date,
		                                                        M.MealName,
		                                                        SA.StateAbbr,
		                                                        R.City,
		                                                        FG.FoodGenreName,
		                                                        MT.MealTypeName,
		                                                        R.RestaurantName
                                                        FROM Meal M
                                                        JOIN Restaurant R
                                                        ON M.RestaurantId = R.Id
                                                        JOIN StateAbbr SA
                                                        ON R.StateAbbrId = SA.Id
                                                        JOIN FoodGenre FG
                                                        ON R.FoodGenreId = FG.Id
                                                        JOIN MealType MT
                                                        ON M.MealTypeId = MT.Id");

                return result.ToList();
            }
        }

        public List<MyMeals> GetMyCurrentMeal()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<MyMeals>(@"SELECT M.*,
		                                                        D.MealId,
		                                                        D.DishName,
		                                                        D.CourseId,
		                                                        D.DishTypeId,
		                                                        D.Ingredient,
		                                                        D.Picture,
		                                                        D.Appearance,
		                                                        D.Aroma,
		                                                        D.Creativity,
		                                                        D.Taste,
		                                                        D.Description,
		                                                        D.Price,
		                                                        D.TotalScore,
		                                                        R.RestaurantName,
		                                                        R.Notes,
		                                                        R.OpenStatus,
		                                                        R.Address,
		                                                        R.City,
		                                                        R.ZipCode,
		                                                        R.FoodGenreId,
		                                                        R.Telephone,
		                                                        R.Website,
		                                                        R.StateAbbrId,
		                                                        C.CourseName,
		                                                        DT.DishTypeName,
		                                                        FG.FoodGenreName,
		                                                        MT.MealTypeName,
		                                                        SA.StateAbbr
                                                        FROM Meal M
                                                        JOIN Restaurant R
                                                        ON M.RestaurantId = R.Id
                                                        JOIN Dish D
                                                        ON M.Id = D.MealId
                                                        JOIN DishType DT
                                                        ON D.DishTypeId = DT.Id
                                                        JOIN Course C
                                                        ON D.CourseId = C.Id
                                                        JOIN FoodGenre FG
                                                        ON R.FoodGenreId = FG.Id
                                                        JOIN MealType MT
                                                        ON M.MealTypeId = MT.Id
                                                        JOIN StateAbbr SA
                                                        ON R.StateAbbrId = SA.Id
                                                        WHERE M.Id = (SELECT MAX(M.Id) from MEAL                                    M)");

                return result.ToList();
            }
        }

    }
}
