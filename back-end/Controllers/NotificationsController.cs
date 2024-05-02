using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationsController(IRepository<Notifications> repository) : BaseController<Notifications, IRepository<Notifications>>(repository)
    {
    }
}