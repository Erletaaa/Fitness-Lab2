using FitnessApp.Models;

namespace FitnessApp.Interfaces;

public interface IUserService
{
    Task<List<Users>> GetUsers(string username, string password);
}
