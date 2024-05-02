using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Workouts : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string DifficultyLevel { get; set; }
    }
}