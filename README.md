# Task Scheduler App 🚀

This is a full-stack task scheduling application built with:
 * Angular 20 (Frontend)
 * NestJS (Backend)
 * SQLite (Database)
*** 

[![Coverage Ci Action](https://img.shields.io/badge/coverage/github/bill-bishop/task-scheduler)](https://github.com/bill-bishop/task-scheduler/actions)

## 🔟 Up - Setup


### Backend (NestJS + SQLite)

### 1. Setup
```bash
cd backend
npm install
npm run start:dev
````

Listens on http://localhost:3000

Ready to return:
- `GET /api/tasks` - get all tasks
- `POST \/api\/tasks` - create a new task
- `PUT\/api/tasks/:id`* - update a task
- `DELETE \/api\/tasks/:id`* - delete a task

## Frontend (Angular 20)

### 1. Setup
```bash
cd frontend
name install
ng. serve
```

Browser at <http://localhost:4200> with task list and editor.

