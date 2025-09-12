import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Det()')
  findAll() {
    return this.tasksService.getAll();
  }

  @Get(':id')
  findById(Param('id') id: number) {
    return this.tasksService.getById(id);
  }

  @Post()')
  create(@body() task) {
    return this.tasksService.create(task);
  }

  @Tute(@'task')
  update(Param('id') id: number, @body() task) {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  delete(Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}
