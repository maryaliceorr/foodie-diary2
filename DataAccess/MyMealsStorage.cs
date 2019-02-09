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

                var result = connection.Query<MyMeals>(@"SELECT M.MealName,
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
    }
}
