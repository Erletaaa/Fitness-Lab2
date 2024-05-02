using Microsoft.EntityFrameworkCore;

namespace FitnessApp.Data;

public class Repository<T> : IRepository<T>, IDisposable where T : class, IEntity
{
    private readonly ApplicationDbContext _context;
    private readonly DbSet<T> _dbSet;

    public Repository()
    {
        _context = new ApplicationDbContext();
        _dbSet = _context.Set<T>();
    }

    public Repository(ApplicationDbContext applicationDbContext)
    {
        _context = applicationDbContext;
        _dbSet = _context.Set<T>();
    }

    public async Task<T> Add(T entity)
    {
        _dbSet.Add(entity);
        await SaveAsync();

        return entity;
    }

    public async Task<T> Delete(int id)
    {
        var entity = await _dbSet.FindAsync(id);

        if (entity == null)
            return entity;

        _dbSet.Remove(entity);
        await SaveAsync();

        return entity;
    }

    public async Task<T> Get(int id)
    {
        return await _dbSet.FindAsync(id);
    }

    public async Task<List<T>> GetAll()
    {
        var tt = await _dbSet.ToListAsync();
        return tt;
    }

    public async Task<T> Update(T entity)
    {
        _context.Entry(entity).State = EntityState.Modified;
        await SaveAsync();

        return entity;
    }

    private async Task SaveAsync()
    {
        await _context.SaveChangesAsync();
    }

    public void Dispose() => _context.Dispose();
}