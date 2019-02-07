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
    public class FoodGenreController : ControllerBase
    {
        private FoodGenreStorage _foodGenreStorage;

        public FoodGenreController(IConfiguration config)
        {
            _foodGenreStorage = new FoodGenreStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetFoodGenres()
        {
            return Ok(_foodGenreStorage.GetFoodGenres());
        }

    }
}