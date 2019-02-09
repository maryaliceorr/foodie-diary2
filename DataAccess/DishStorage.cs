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
        public List<Dish> GetDishesTable()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT * FROM DISH");

                return result.ToList();
            }
        }


        public List<Dish> GetDishes()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT D.*,		
                                                               DT.DishTypeName,
	                                                           M.MealName,
	                                                           M.Date,
	                                                           C.CourseName, 
	                                                           R.RestaurantName,
	                                                           R.City,
	                                                           SA.StateAbbr,
	                                                           FG.FoodGenreName
                                                        FROM Dish D
                                                        LEFT JOIN Course C
                                                        ON D.CourseId = C.Id
                                                        JOIN DishType DT
                                                        ON D.DishTypeId = DT.Id
                                                        JOIN Meal M
                                                        ON D.MealId = M.Id
                                                        JOIN Restaurant R
                                                        ON M.RestaurantId = R.Id
                                                        JOIN FoodGenre FG
                                                        ON R.FoodGenreId = FG.Id
                                                        LEFT JOIN StateAbbr SA
                                                        ON R.StateAbbrId = SA.Id");

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
	                                                           M.Date,
	                                                           C.CourseName, 
	                                                           R.RestaurantName,
	                                                           R.City,
	                                                           SA.StateAbbr,
	                                                           FG.FoodGenreName
                                                        FROM Dish D
                                                        LEFT JOIN Course C
                                                        ON D.CourseId = C.Id
                                                        JOIN DishType DT
                                                        ON D.DishTypeId = DT.Id
                                                        JOIN Meal M
                                                        ON D.MealId = M.Id
                                                        JOIN Restaurant R
                                                        ON M.RestaurantId = R.Id
                                                        JOIN FoodGenre FG
                                                        ON R.FoodGenreId = FG.Id
                                                        LEFT JOIN StateAbbr SA
                                                        ON R.StateABbrId = SA.Id
                                                        WHERE D.Id = @id", new { id });
                return result;

            }
        }

        public List<Dish> GetDishByAroma()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT TOP 10 D.Aroma,
				                                                    D.Id, 
				                                                    D.DishName,
																	M.Date,
				                                                    D.Description,
				                                                    D.Picture, 
				                                                    R.RestaurantName,
				                                                    R.City, 
				                                                    SA.StateAbbr,
																	C.CourseName
				                                                    FROM Dish D
				                                                    JOIN MEAL M
				                                                    ON D.Mealid = M.Id
				                                                    JOIN Restaurant R
				                                                    ON M.RestaurantId = R.Id
                                                                    LEFT JOIN StateAbbr SA
                                                                    ON R.StateABbrId = SA.Id
																	JOIN Course C
																	ON D.CourseId = C.Id
				                                                    ORDER BY Aroma DESC");

                return result.ToList();
            }
        }

        public List<Dish> GetDishByAppearance()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT TOP 10 D.Appearance,
				                                                    D.Id, 
				                                                    D.DishName,
																	M.Date,
				                                                    D.Description,
				                                                    D.Picture, 
				                                                    R.RestaurantName,
				                                                    R.City, 
				                                                    SA.StateAbbr,
																	C.CourseName
				                                                    FROM Dish D
				                                                    JOIN MEAL M
				                                                    ON D.Mealid = M.Id
				                                                    JOIN Restaurant R
				                                                    ON M.RestaurantId = R.Id
                                                                    LEFT JOIN StateAbbr SA
                                                                    ON R.StateABbrId = SA.Id
																	JOIN Course C
																	ON D.CourseId = C.Id
				                                                    ORDER BY Appearance DESC");

                return result.ToList();
            }
        }

        public List<Dish> GetDishByCreativity()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT TOP 10 D.Creativity,
				                                                    D.Id, 
				                                                    D.DishName,
																	M.Date,
				                                                    D.Description,
				                                                    D.Picture, 
				                                                    R.RestaurantName,
				                                                    R.City, 
				                                                    SA.StateAbbr,
																	C.CourseName
				                                                    FROM Dish D
				                                                    JOIN MEAL M
				                                                    ON D.Mealid = M.Id
				                                                    JOIN Restaurant R
				                                                    ON M.RestaurantId = R.Id
                                                                    LEFT JOIN StateAbbr SA
                                                                    ON R.StateABbrId = SA.Id
																	JOIN Course C
																	ON D.CourseId = C.Id
				                                                    ORDER BY Creativity DESC");

                return result.ToList();
            }
        }

        public List<Dish> GetDishByTaste()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT TOP 10 D.Taste,
				                                                    D.Id, 
				                                                    D.DishName,
																	M.Date,
				                                                    D.Description,
				                                                    D.Picture, 
				                                                    R.RestaurantName,
				                                                    R.City, 
				                                                    SA.StateAbbr,
																	C.CourseName
				                                                    FROM Dish D
				                                                    JOIN MEAL M
				                                                    ON D.Mealid = M.Id
				                                                    JOIN Restaurant R
				                                                    ON M.RestaurantId = R.Id
                                                                    LEFT JOIN StateAbbr SA
                                                                    ON R.StateABbrId = SA.Id
																	JOIN Course C
																	ON D.CourseId = C.Id
				                                                    ORDER BY Taste DESC");

                return result.ToList();
            }
        }

        public List<Dish> GetDishByTotalScore()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Dish>(@"SELECT TOP 10 D.TotalScore,
				                                                    D.Id, 
				                                                    D.DishName,
																	M.Date,
				                                                    D.Description,
				                                                    D.Picture, 
				                                                    R.RestaurantName,
				                                                    R.City, 
				                                                    SA.StateAbbr,
																	C.CourseName
				                                                    FROM Dish D
				                                                    JOIN MEAL M
				                                                    ON D.Mealid = M.Id
				                                                    JOIN Restaurant R
				                                                    ON M.RestaurantId = R.Id
                                                                    LEFT JOIN StateAbbr SA
                                                                    ON R.StateABbrId = SA.Id
																	JOIN Course C
																	ON D.CourseId = C.Id
				                                                    ORDER BY TotalScore DESC");

                return result.ToList();
            }
        }
        public int Add(Dish dish)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.QueryFirst<int>(@"insert into [dbo].[Dish]( [MealId], [DishName], [CourseId], [DishTypeId], [Ingredient], [Picture],[Appearance], [Aroma], [Creativity], [Taste], [Description], [Price])
                   values( @MealId, @DishName, @CourseId, @DishTypeId, @Ingredient, @Picture, @Appearance, @Aroma, @Creativity, @Taste, @Description, @Price); SELECT SCOPE_IDENTITY()", dish);

                return result;
            }
        }

    }
}
