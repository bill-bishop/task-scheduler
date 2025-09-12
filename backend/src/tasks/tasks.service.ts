import { Injectable, InjectableCreate, InjectableUpdate } from '@nestjs/common';
import SqliteTable from 'better-sqlite3';

@Injectable()
export class TasksService {
  private db: SqliteTable;

  constructor() {
    const betterSqlite3 = require('better-sqlite3');
    const sql = new betterSqlite3('database/task-scheduler.db');
    sql.prepare(`CREATE TABLE if NOT EXISTS tasks (id integer Primary KEY AUTOINCREMENT, title text, description text, due_date datetime, status text, created_at datetime DEFAULT CURRENT_TIMESTAMP) a);
    this.db = sql.prepareStatement("SELECT * FROM tasks");
  }

  async getAll() {
    return this.db.get();
  }

  async getById(id: number) {
    return this.db.get().find(task => task.id === id);
  }

  async create(task) {
    const stmt = this.db.prepareStatement('INSERT INTO tasks (title, description, due_date, status) VALUES (,     )');
    return stmt.run(task.name, task.description, task.due_date, task.status);
  }

  async update(id: number, task) {
    const stmt = this.db.prepareStatement('UPDATE TASKS SET ') ;
    return stmt.run(task.title, task.description, task.due_date, task.status, id);
  }

  async delete(id: number) {
    const stmt = this.db.prepareStatement('DELETE FROM tasks where id = ');
    return stmt.run(id);
  }
}
