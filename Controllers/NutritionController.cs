using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using FitnessApp.Models;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NutritionController : ControllerBase
    {
        private static List<Nutrition> _nutritionItems = new List<Nutrition>
        {
            new Nutrition { NutritionID = 1, Title = "Avocado Toast", Description = "Healthy and delicious avocado toast", Type = "Breakfast", Ingredients = "Avocado, Bread, Tomato, Salt, Pepper", Instructions = "1. Toast the bread. 2. Mash the avocado and spread it on the toast. 3. Top with sliced tomato, salt, and pepper." },
            new Nutrition { NutritionID = 2, Title = "Grilled Chicken Salad", Description = "Fresh and nutritious salad with grilled chicken", Type = "Lunch", Ingredients = "Chicken Breast, Lettuce, Tomato, Cucumber, Olive Oil, Vinegar, Salt, Pepper", Instructions = "1. Grill the chicken breast until fully cooked. 2. Chop the lettuce, tomato, and cucumber. 3. Slice the chicken breast and mix with the vegetables. 4. Dress with olive oil, vinegar, salt, and pepper." }
            // Add more nutrition items as needed
        };

        // GET: api/nutrition
        [HttpGet]
        public ActionResult<IEnumerable<Nutrition>> Get()
        {
            return Ok(_nutritionItems);
        }

        // GET: api/nutrition/5
        [HttpGet("{id}")]
        public ActionResult<Nutrition> Get(int id)
        {
            var nutritionItem = _nutritionItems.FirstOrDefault(n => n.NutritionID == id);
            if (nutritionItem == null)
            {
                return NotFound();
            }
            return Ok(nutritionItem);
        }

        // POST: api/nutrition
        [HttpPost]
        public ActionResult<Nutrition> Post([FromBody] Nutrition nutritionItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            nutritionItem.NutritionID = _nutritionItems.Count + 1;
            _nutritionItems.Add(nutritionItem);
            return CreatedAtAction(nameof(Get), new { id = nutritionItem.NutritionID }, nutritionItem);
        }

        // PUT: api/nutrition/5
        [HttpPut("{id}")]
        public ActionResult<Nutrition> Put(int id, [FromBody] Nutrition nutritionItem)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var existingNutritionItem = _nutritionItems.FirstOrDefault(n => n.NutritionID == id);
            if (existingNutritionItem == null)
            {
                return NotFound();
            }
            existingNutritionItem.Title = nutritionItem.Title;
            existingNutritionItem.Description = nutritionItem.Description;
            existingNutritionItem.Type = nutritionItem.Type;
            existingNutritionItem.Ingredients = nutritionItem.Ingredients;
            existingNutritionItem.Instructions = nutritionItem.Instructions;
            return Ok(existingNutritionItem);
        }

        // DELETE: api/nutrition/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var nutritionItem = _nutritionItems.FirstOrDefault(n => n.NutritionID == id);
            if (nutritionItem == null)
            {
                return NotFound();
            }
            _nutritionItems.Remove(nutritionItem);
            return Ok();
        }
    }
}
