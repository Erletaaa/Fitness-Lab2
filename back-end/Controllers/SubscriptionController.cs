using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubscriptionController(IRepository<Subscription> repository) : BaseController<Subscription, IRepository<Subscription>>(repository)
    {
    }
}