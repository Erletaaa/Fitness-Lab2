using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Notifications : IEntity
    {
        [Key] public int Id { get; set; }
        public int UserId { get; set; }
        public string Message { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}