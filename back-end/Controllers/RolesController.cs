using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController(IRepository<Roles> repository) : BaseController<Roles, IRepository<Roles>>(repository)
    {
    }
}