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
    }
}
