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
    public class StateAbbrController : ControllerBase
    {
        private StateAbbrStorage _stateAbbrStorage;

        public StateAbbrController(IConfiguration config)
        {
            _stateAbbrStorage = new StateAbbrStorage(config);
        }

        [HttpGet("")]
        public IActionResult GetStates()
        {
            return Ok(_stateAbbrStorage.GetStates());
        }
    }
}