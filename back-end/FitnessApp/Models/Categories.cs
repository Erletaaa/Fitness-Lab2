using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Categories : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }
    }
}