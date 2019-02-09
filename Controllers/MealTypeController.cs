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
    public class MealTypeController : ControllerBase
    {
        private MealTypeStorage _mealTypeStorage;

        public MealTypeController(IConfiguration config)
        {
            _mealTypeStorage = new MealTypeStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetMealTypes()
        {
            return Ok(_mealTypeStorage.GetMealTypes());
        }

    }
}