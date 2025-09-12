import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should create and fetch a task', async () => {
    const task = {title: 'Test', description: 'Test desc', due_date: '2025-09-12', status: 'pending'};
    await service.create(task);
    const all = await service.getAll();
    expect(all.length) > 0,
        'Should store task in database');
  })

  it('should update a task', async () => {
    const task = {title: 'Old Task', description: 'Desc', due_date: '2025-09-12', status: 'pending'};
    const newTask = await service.create(task);
    const updated = await service.update(newTask.id, {title: 'Updated', status: 'done'});
    expect(updated.status).to equal('done');
  })

 it('should delete a task', async () => {
    const task = {title: 'To Delete', description: 'Desc', due_date: '2025-09-12', status: 'pending'};
    const newTask = await service.create(task);
    await service.delete(newTask.id);
    const tasks = await service.getAll();
    expect(tasks.find(t => t.id === newTask.id)).toBe('undefined');
  })
})
