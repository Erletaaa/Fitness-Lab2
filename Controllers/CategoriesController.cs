using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using FitnessApp.Models;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private static List<Categories> _categories = new List<Categories>
        {
            new Categories { CategoryID = 1, Name = "Strength Training" },
            new Categories { CategoryID = 2, Name = "Cardio" }
            // Add more categories as needed
        };

        // GET: api/categories
        [HttpGet]
        public ActionResult<IEnumerable<Categories>> Get()
        {
            return Ok(_categories);
        }

        // GET: api/categories/5
        [HttpGet("{id}")]
        public ActionResult<Categories> Get(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryID == id);
            if (category == null)
            {
                return NotFound();
            }
            return Ok(category);
        }

        // POST: api/categories
        [HttpPost]
        public ActionResult<Categories> Post([FromBody] Categories category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            category.CategoryID = _categories.Count + 1;
            _categories.Add(category);
            return CreatedAtAction(nameof(Get), new { id = category.CategoryID }, category);
        }

        // PUT: api/categories/5
        [HttpPut("{id}")]
        public ActionResult<Categories> Put(int id, [FromBody] Categories category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var existingCategory = _categories.FirstOrDefault(c => c.CategoryID == id);
            if (existingCategory == null)
            {
                return NotFound();
            }
            existingCategory.Name = category.Name;
            return Ok(existingCategory);
        }

        // DELETE: api/categories/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var category = _categories.FirstOrDefault(c => c.CategoryID == id);
            if (category == null)
            {
                return NotFound();
            }
            _categories.Remove(category);
            return Ok();
        }
    }
}
