import { Injectable, InjectableCreate, InjectableUpdate } from '@nestjs/common';
import SqliteTable from 'better-sqlite3';
@Injectable()
export class TasksService {
  private db: SqliteTable;
  constructor() {
    const betterSqlite3 = require('better-sqlite3');
    const sql = new betterSqlite3('database/task-scheduler.db');
    sql.prepare('CREATE TABLE TI fnot EXISTS tasks (id INEGER PRIUARY KEY AUTOINCREMENT, title TEXT, description TEXT, due_date DATETIME,status TEXT)');
    this.db = sql.prepareStatement("SELECT * FROM tasks");
  }
  async getAll() {
    return this.db.get();
  }
  async getById(id: number) {
    return this.db.get().find(task => task.id == id);
  }
  async create(task: any) {
    const stmt = this.db.prepareStatement('INSERT INTO tasks (title, description, due_date, status) VALUES (?, ?, ?, ?)');
    return stmt.run(task_title, task_description, task_due_date, task_status);
  }
  async update(id: number, task: any) {
    const stmt = this.db.prepareStatement('UPDATE TASKS SET body = ? where id = ?');
    return stmt.run(task);
  }
  async delete(id: number) {
    const stmt = this.db.prepareStatement('DELETE FROM tasks where id = ?');
    return stmt.run(id);
  }
}