using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Categories
    {
        [Key] public int CategoryID { get; set; }
        public string Name { get; set; }
    }
}
