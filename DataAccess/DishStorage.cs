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
    public class DishStorage
    {
        private readonly string ConnectionString;

        public DishStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public List<Dish> GetDishes()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT D.*,		
		                                                        DT.DishTypeName,
		                                                        M.MealName,
		                                                        C.CourseName
                                                        FROM Dish D
                                                        left JOIN Course C
                                                        ON D.CourseId = C.Id
                                                        JOIN DishType DT
                                                        ON D.DishTypeId = DT.Id
                                                        JOIN Meal M
                                                        ON D.MealId = M.Id");

                return result.ToList();
            }
        }

        public Dish GetDishById(int id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.QueryFirst<Dish>(@"SELECT D.*,		
		                                                        DT.DishTypeName,
		                                                        M.MealName,
		                                                        C.CourseName
                                                        FROM Dish D
                                                        left JOIN Course C
                                                        ON D.CourseId = C.Id
                                                        JOIN DishType DT
                                                        ON D.DishTypeId = DT.Id
                                                        JOIN Meal M
                                                        ON D.MealId = M.Id
                                                        WHERE D.Id = @id", new { id });
                return result;

            }
        }
    }
}
