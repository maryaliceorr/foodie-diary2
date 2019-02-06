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

        public List<Restaurant> GetStates()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Restaurant>(@"SELECT R.Id,
		                                                        SA.StateAbbr
                                                        FROM Restaurant R
                                                        RIGHT JOIN StateAbbr SA
                                                        ON R.StateAbbrId = SA.Id
                                                        ORDER BY SA.StateAbbr ASC");

                return result.ToList();
            }
        }

    }
}
