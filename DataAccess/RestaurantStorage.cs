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
    public class RestaurantStorage
    {
        private readonly string ConnectionString;

        public RestaurantStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public List<Restaurant> GetRestaurants()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Restaurant>(@"SELECT * FROM Restaurant");

                return result.ToList();
            }
        }

        public int Add(Restaurant restaurant)
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.QueryFirst<int>(@"insert into [dbo].[Restaurant]( [RestaurantName], [Notes], [OpenStatus], [Address], [City], [ZipCode],[FoodGenreId], [Telephone], [Website], [StateAbbrId])
                   values( @RestaurantName, @Notes, @OpenStatus, @Address, @City, @ZipCode, @FoodGenreId, @Telephone, @Website, @StateAbbrId); SELECT SCOPE_IDENTITY()", restaurant);

                return result;
            }
        }




    }
}
