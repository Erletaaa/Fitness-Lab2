using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class UserRoles : IEntity
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public DateTime UpdatedDate { get; set; }

        public int UsersId { get; set; }

        public int RolesId { get; set; }

        public Users Users { get; set; }

        public Roles Roles { get; set; }
    }
}