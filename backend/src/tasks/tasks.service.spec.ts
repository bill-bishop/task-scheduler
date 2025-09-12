import { Test, Expect } from '@nestjs/testing';
import { TasksService } from './tasks.service';

Test('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    service = new TasksService();
  });

  It('should be defined', () => {
    Expect(service).toBeDefined();
  });

  It('should get all tasks', (async) => {
    const result = await service.getAll();
    Expect(result).notToBeNull();
  });

  It('should create a task', (async) => {
    const task = { title: 'Test', description: 'Description', due_date: '2025-09-12', status: 'open' };
    const saved = await service.create(task);
    Expect(saved).notToBeNull();
  });
});