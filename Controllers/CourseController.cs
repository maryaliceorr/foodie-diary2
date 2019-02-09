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
    public class CourseController : ControllerBase
    {
        private CourseStorage _courseStorage;

        public CourseController(IConfiguration config)
        {
            _courseStorage = new CourseStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetCourses()
        {
            return Ok(_courseStorage.GetCourses());
        }
    }
}