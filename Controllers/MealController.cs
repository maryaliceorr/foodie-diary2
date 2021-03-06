﻿using System;
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
    public class MealController : ControllerBase
    {
        private MealStorage _mealStorage;

        public MealController(IConfiguration config)
        {
            _mealStorage = new MealStorage(config);
        }

        [HttpPost("addmeal")]
        public IActionResult AddMeal(Meal meal)
        {
            return Ok(_mealStorage.Add(meal));
        }

        [HttpGet("{id}")]
        public IActionResult GetMyIndividualMeal(int id)
        {
            return Ok(_mealStorage.GetMyIndividualMeal(id));
        }

    }
}