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

        [HttpGet("dishestable")]
        public IActionResult GetDishesTable()
        {
            return Ok(_dishStorage.GetDishesTable());
        }

        [HttpGet("{id:int}")]
        public IActionResult GetIndividualDishById(int id)
        {
            return Ok(_dishStorage.GetIndividualDishById(id));
        }

        [HttpGet("dishesformeal/{id:int}")]
        public IActionResult GetDishesForMyMeal(int id)
        {
            return Ok(_dishStorage.GetDishesForMyMeal(id));
        }

        [HttpGet("aroma")]
        public IActionResult GetDishByAroma()
        {
            return Ok(_dishStorage.GetDishByAroma());
        }

        [HttpGet("appearance")]
        public IActionResult GetDishByAppearance()
        {
            return Ok(_dishStorage.GetDishByAppearance());
        }

        [HttpGet("creativity")]
        public IActionResult GetDishByCreativity()
        {
            return Ok(_dishStorage.GetDishByCreativity());
        }

        [HttpGet("taste")]
        public IActionResult GetDishByTaste()
        {
            return Ok(_dishStorage.GetDishByTaste());
        }

        [HttpGet("totalscore")]
        public IActionResult GetDishByTotalScore()
        {
            return Ok(_dishStorage.GetDishByTotalScore());
        }

        [HttpPost("adddish")]
        public IActionResult AddDish([FromBody] Dish dish)

        {
            return Ok(_dishStorage.Add(dish));
        }

    }
}