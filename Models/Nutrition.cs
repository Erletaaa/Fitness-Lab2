using System;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Nutrition
    {
        [Key]
        public int NutritionID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Type { get; set; } 
        public string Ingredients { get; set; }
        public string Instructions { get; set; }
    }
}
