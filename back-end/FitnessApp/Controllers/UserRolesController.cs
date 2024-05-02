using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRolesController(IRepository<UserRoles> repository) : BaseController<UserRoles, IRepository<UserRoles>>(repository)
    {
    }
}