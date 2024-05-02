using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PackagesController(IRepository<Packages> repository) : BaseController<Packages, IRepository<Packages>>(repository)
    {
    }
}