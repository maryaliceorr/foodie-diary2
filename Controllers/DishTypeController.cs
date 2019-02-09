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
    public class DishTypeController : ControllerBase
    {
        private DishTypeStorage _dishTypeStorage;

        public DishTypeController(IConfiguration config)
        {
            _dishTypeStorage = new DishTypeStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetDishTypes()
        {
            return Ok(_dishTypeStorage.GetDishTypes());
        }

    }
}