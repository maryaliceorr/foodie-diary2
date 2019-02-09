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
    public class FoodGenreStorage
    {
        private readonly string ConnectionString;

        public FoodGenreStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public List<FoodGenre> GetFoodGenres()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<FoodGenre>(@"SELECT * FROM FoodGenre");

                return result.ToList();
            }
        }

    }
}
