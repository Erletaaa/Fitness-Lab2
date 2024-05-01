using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using FitnessApp.Models;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : Controller
    {
        private static List<Workouts> _workouts = new List<Workouts>
        {
            new Workouts { WorkoutsID = 1, Title = "Cardio Blast", Description = "High-intensity cardio workout", DifficultyLevel = "Intermediate", Trainers = new Trainers { TrainerID = 1, Name = "John Doe" } },
            new Workouts { WorkoutsID = 2, Title = "Strength Training", Description = "Full-body strength training routine", DifficultyLevel = "Advanced", Trainers = new Trainers { TrainerID = 2, Name = "Jane Smith" } }
            // Add more workouts as needed
        };

        // GET: api/workouts
        [HttpGet]
        public ActionResult<IEnumerable<Workouts>> Get()
        {
            return Ok(_workouts);
        }

        // GET: api/workouts/5
        [HttpGet("{id}")]
        public ActionResult<Workouts> Get(int id)
        {
            var workout = _workouts.FirstOrDefault(w => w.WorkoutsID == id);
            if (workout == null)
            {
                return NotFound();
            }
            return Ok(workout);
        }

        // POST: api/workouts
        [HttpPost]
        public ActionResult<Workouts> Post([FromBody] Workouts workout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            workout.WorkoutsID = _workouts.Count + 1;
            _workouts.Add(workout);
            return CreatedAtAction(nameof(Get), new { id = workout.WorkoutsID }, workout);
        }

        // PUT: api/workouts/5
        [HttpPut("{id}")]
        public ActionResult<Workouts> Put(int id, [FromBody] Workouts workout)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var existingWorkout = _workouts.FirstOrDefault(w => w.WorkoutsID == id);
            if (existingWorkout == null)
            {
                return NotFound();
            }
            existingWorkout.Title = workout.Title;
            existingWorkout.Description = workout.Description;
            existingWorkout.DifficultyLevel = workout.DifficultyLevel;
            existingWorkout.Trainers = workout.Trainers;
            return Ok(existingWorkout);
        }

        // DELETE: api/workouts/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var workout = _workouts.FirstOrDefault(w => w.WorkoutsID == id);
            if (workout == null)
            {
                return NotFound();
            }
            _workouts.Remove(workout);
            return Ok();
        }
    }
}
