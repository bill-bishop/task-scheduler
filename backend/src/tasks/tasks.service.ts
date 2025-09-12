import { Injectable } from '@nestjs/common';
const betterSqlite3 = require('better-sqlite3');
@Injectable()
export class TasksService {  private db: any;

  constructor() {
    const sql = new betterSqlite3('database/task-scheduler.db');
    sql.prepare('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, due_date TEXT, status TEXT)').run();
    this.db = sql;
  }

  async getAll() {
    return this.db.prepare('SELECT * FROM tasks').all();
  }

  async getById(id: number) {
    return this.db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
  }

  async create(task: { title: string; description: string; due_date: string; status: string }) {
    const stmt = this.db.prepare('INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)');
    return stmt.run(task.title, task.description, task.due_date, task.status);
  }

  async update(id: number, task: { title: string; description: string; due_date: string; status: string }) {
    const stmt = this.db.prepare('UPDATE tasks SET title = ?, description = ?, due_date = ?, status = ? WHERE id = ?');
    return stmt.run(task.title, task.description, task.due_date, task.status, id);
  }

  async delete(id: number) {
    const stmt = this.db.prepare('DELETE FROM tasks where id = ?');
    return stmt.run(id);
  }
}