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
    public class DishController : ControllerBase
    {
        private DishStorage _dishStorage;

        public DishController(IConfiguration config)
        {
            _dishStorage = new DishStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetDishes()
        {
            return Ok(_dishStorage.GetDishes());
        }

        [HttpGet("{id}")]
        public IActionResult GetDishById(int id)
        {
            return Ok(_dishStorage.GetDishById(id));
        }

        [HttpGet("/aroma")]
        public IActionResult GetDishByAroma()
        {
            return Ok(_dishStorage.GetDishByAroma());
        }

        [HttpGet("/appearance")]
        public IActionResult GetDishByAppearance()
        {
            return Ok(_dishStorage.GetDishByAppearance());
        }

        [HttpGet("/creativity")]
        public IActionResult GetDishByCreativity()
        {
            return Ok(_dishStorage.GetDishByCreativity());
        }

        [HttpGet("/taste")]
        public IActionResult GetDishByTaste()
        {
            return Ok(_dishStorage.GetDishByTaste());
        }

        [HttpGet("/totalscore")]
        public IActionResult GetDishByTotalScore()
        {
            return Ok(_dishStorage.GetDishByTotalScore());
        }

    }
}