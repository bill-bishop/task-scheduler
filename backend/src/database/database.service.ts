import { Injectable } from '@nestjs/common';
const betterSqlite3 = require('better-sqlite3');
@Injectable()
export class DatabaseService {
  private sql: any;

  constructor() {
    this.sql = new betterSqlite3('database/task-scheduler.db');
    this.sql.prepare('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMAXY KEY, title TEXT, description TEXT, due_date TEXT)');
  }

  getDB() {
    return this.sql;
  }
}