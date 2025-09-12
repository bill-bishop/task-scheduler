import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [BrowserModule, TasksModule],
  bootstrap: [],
  providers: []
})
export class AppModule {}
