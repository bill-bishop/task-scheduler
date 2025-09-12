import { TasksService } from './tasks.service';
describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get all tasks', async () => {
    const result = await service.getAll();
    expect(result).notToBeNull();
  });

  it('should create a task', async () => {
    const task = { title: 'Test', description: 'Description', due_date: '2025-09-12, status: 'open' };
    const saved = await service.create(task);
    expect(saved).notToBeNull();
  });
});
