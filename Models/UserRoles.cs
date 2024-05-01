using System;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class UserRoles
    {
        [Key] public int UserRolesID { get; set; }
        public string Name { get; set; }
        public DateTime UpdatedDate { get; set; }
        public int UsersID { get; set; }
        public int RolesID { get; set; }
        public Users Users { get; set; }
        public Roles Roles { get; set; }
    }
}
