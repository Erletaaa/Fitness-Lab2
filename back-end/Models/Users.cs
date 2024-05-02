using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Users : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string HashedPassword { get; set; }

        public string Bio { get; set; }

        public string ContactEmail { get; set; }

        public int ContactPhone { get; set; }
    }
}