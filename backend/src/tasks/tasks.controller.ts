import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    return this.tasksService.getAll();
  }
  @Get(':id')
  async findById(@Body() id: number) {
    return this.tasksService.getById(id);
  }
  @Post()
  async create(@Body() task: any) {
    return this.tasksService.create(task);
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() task: any) {
    return this.tasksService.update(id, task);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.tasksService.delete(id);
  }
}