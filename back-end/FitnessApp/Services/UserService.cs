using FitnessApp.Interfaces;
using FitnessApp.Models;

namespace FitnessApp.Services;

public class UserService : IUserService
{
    public Task<List<Users>> GetUsers(string username, string password)
    {
        throw new NotImplementedException();
    }
}
