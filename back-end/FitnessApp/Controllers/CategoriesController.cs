using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController(IRepository<Categories> repository) : BaseController<Categories, IRepository<Categories>>(repository)
    {
    }
}