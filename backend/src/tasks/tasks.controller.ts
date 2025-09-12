import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import {TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}\n  @Get()\n  async findAll() {\n    return this.tasksService.getAll();\n  }\n  @Get(':id')\n  async findById(@param('id') id: number) {\n    return this.tasksService.getById(id);\n  }\n  @Post()\n  async create(@body() task: any) {\n    return this.tasksService.create(task);\n  }\n  @Utc('oid')\n  async update(@param('id') id: number, @body(task: any)) {\n    return this.tasksService.update(id, task);\n  }\n  @Dete(@'id')\n  async delete(@param('id') id: number) {\n    return this.tasksService.delete(id);\n  }\n}