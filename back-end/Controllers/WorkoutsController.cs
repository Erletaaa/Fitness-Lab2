﻿using FitnessApp.Data;
using FitnessApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace FitnessApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController(IRepository<Workouts> repository) : BaseController<Workouts, IRepository<Workouts>>(repository)
    {
    }
}