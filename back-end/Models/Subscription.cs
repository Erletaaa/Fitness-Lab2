using FitnessApp.Data;
using System.ComponentModel.DataAnnotations;

namespace FitnessApp.Models
{
    public class Subscription : IEntity
    {
        [Key]
        public int Id { get; set; }

        public int UsersId { get; set; }

        public int PackageId { get; set; }

        public DateTime SubscriptionDate { get; set; }

        public DateTime ExpiryDate { get; set; }

        public Users Users { get; set; }

        public Packages Packages { get; set; }
    }
}