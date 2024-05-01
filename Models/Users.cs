using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Users
    {
        [Key] public int UsersID { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string HashedPassword { get; set; }
    }
}