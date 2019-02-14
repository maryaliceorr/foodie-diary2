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
    public class MealStorage

    {
        private readonly string ConnectionString;


        public MealStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public int Add(Meal meal)
        {
            using(var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.QueryFirst<int>(@"insert into [dbo].[Meal]( [MealName], [Date], [MealTypeId], [RestaurantId])
                  values( @MealName, @Date, @MealTypeId, @RestaurantId); SELECT SCOPE_IDENTITY()", meal);

                return result;
            }
        }


        public List<Meal> GetMyIndividualMeal(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Meal>(@"SELECT M.*,
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
		                                                        FG.FoodGenreName,
		                                                        MT.MealTypeName,
		                                                        SA.StateAbbr
                                                        FROM Meal M
                                                        JOIN Restaurant R
                                                        ON M.RestaurantId = R.Id
                                                        JOIN FoodGenre FG
                                                        ON R.FoodGenreId = FG.Id
                                                        JOIN MealType MT
                                                        ON M.MealTypeId = MT.Id
                                                        JOIN StateAbbr SA
                                                        ON R.StateAbbrId = SA.Id
                                                        WHERE M.Id = @id", new { id = id });

                return result.ToList();
            }
        }


    }
}
