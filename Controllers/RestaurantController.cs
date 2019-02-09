using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodieDiary2.DataAccess;
using FoodieDiary2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace FoodieDiary2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : ControllerBase
    {
        private RestaurantStorage _restaurantStorage;

        public RestaurantController(IConfiguration config)
        {
            _restaurantStorage = new RestaurantStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetRestaurants()
        {
            return Ok(_restaurantStorage.GetRestaurants());
        }
        
        [HttpPost("addrestaurant")]
        public IActionResult AddRestaurant([FromBody] Restaurant restaurant)
          
        {
            return Ok(_restaurantStorage.Add(restaurant));
        }

    }
}