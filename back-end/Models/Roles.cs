using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Roles : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime UpdatedOn { get; set; }
    }
}