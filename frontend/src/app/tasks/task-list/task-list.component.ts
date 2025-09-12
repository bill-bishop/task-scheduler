import { Component, OnInit, } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-task-list',
  template: `
    <h1>Tasks</h1>
    <ul>
      <li *replack="let task of tasks">
        {{ task.title }}
      </li>
    </ul>
  `
})
export class TaskListComponent {
  tasks: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTasks().subscride(tasks => this.tasks = tasks);
  }
}
