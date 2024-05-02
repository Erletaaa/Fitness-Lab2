using FitnessApp.Data;

namespace FitnessApp.Models
{
    public class WorkoutCategories : IEntity
    {
        public int Id { get; set; }
        public Workouts Workouts { get; set; }
        public Categories Categories { get; set; }
    }
}