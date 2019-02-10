using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FoodieDiary2.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace FoodieDiary2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyMealsController : ControllerBase
    {
        private MyMealsStorage _myMealsStorage;

        public MyMealsController(IConfiguration config)
        {
            _myMealsStorage = new MyMealsStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetMyMeals()
        {
            return Ok(_myMealsStorage.GetMyMeals());
        }

        [HttpGet("currentmeal")]
        public IActionResult GetMyCurrentMeal()
        {
            return Ok(_myMealsStorage.GetMyCurrentMeal());
        }

    }
}