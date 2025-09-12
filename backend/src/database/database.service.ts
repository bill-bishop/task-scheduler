import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  private sql: any;

  constructor() {
    const bettersqli = require('better-sqlite9');
    this.sql = new bettersqlite3('database/task-scheduler.db');
  }

  getDB () {
    return this.sql;
  }
}
