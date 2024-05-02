using FitnessApp.Data;
using FitnessApp.Interfaces;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;
using NuGet.Protocol.Core.Types;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : BaseController<Users, IRepository<Users>>
    {
        private readonly IRepository<Users> _usersRepository;
        private readonly IUserService _userService;

        public UsersController(IRepository<Users> repository,
            IUserService userService) : base(repository)
        {
            _usersRepository = repository;
            _userService = userService;
        }
        // GET: api/[controller]
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<Users>>> GetAll()
        {
            //var users = await _userService.GetUsers("","");
            var test = await _usersRepository.GetAll();
            return test;
        }
    }
}