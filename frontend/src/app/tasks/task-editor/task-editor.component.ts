import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-task-editor',
  template: `
    <h2>Add Task</h2>
    <form [formGroup] = "form" (ngSubmit="save()">
      <label>Title<input type="text" formControl="title" /></label>
      <label>Description<input type="text" formControl="description" /></label>
      <label>Due Date<input type="datetime" formControl="due_date" /></label>
      <button type="submit">Add</button>
    </form>
  `
})
export class TaskEditorComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = this.fb.group({
      title: '',
      description: '',
      due_date: '',
    });
  }

  save() {
    if (this.form.value.title) {
      this.apiService.createTask(this.form.value).subscribe(() => {\n        this.form.reset();
      });
    }
  }
}