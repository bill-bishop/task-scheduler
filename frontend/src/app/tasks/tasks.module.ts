import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';

@NgModule({
  declarations: [TaskListComponent, TaskEditorComponent],
  imports: [CommonModule],
  exports: [TaskListComponent, TaskEditorComponent]
})
export class TasksModule {}
