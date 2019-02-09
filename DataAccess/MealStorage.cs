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
        private string connectionstring;

        public MealStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        public bool Add(Meal meal)
        {
            using (var db = new SqlConnection(connectionstring))
            {
                db.Open();

                var result = db.Execute(@"insert into [dbo].[Meal]( [MealName], [Date], [MealTypeId], [RestaurantId])
                                            values( @MealName, @Date, @MealTypeId, @RestaurantId)", meal);

                return result == 1;
            }
        }
    }
}
