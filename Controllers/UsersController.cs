using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using FitnessApp.Models;
using Microsoft.EntityFrameworkCore;
using FitnessApp.Data;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public ActionResult<IEnumerable<Users>> GetUsers()
        {
            return _context.Users.ToList();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public ActionResult<Users> GetUserById(int id)
        {
            var user = _context.Users.FirstOrDefault(u => u.UsersID == id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/Users
        [HttpPost]
        public IActionResult PostUser(Users user)
        {
            var createUser = new Users
            {
                Name = user.Name,
                Email = user.Email,
                HashedPassword = user.HashedPassword
            };

            _context.Users.Add(createUser);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetUserById), new { id = user.UsersID }, user);
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, Users user)
        {
            if (id != user.UsersID)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;
            _context.SaveChanges();

            return NoContent();
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            _context.SaveChanges();

            return NoContent();
        }
    }
}

