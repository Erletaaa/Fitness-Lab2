using System;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Workouts
    {
        public int WorkoutsID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string DifficultyLevel { get; set; }
        public Trainers Trainers { get; set; }
    }
}
