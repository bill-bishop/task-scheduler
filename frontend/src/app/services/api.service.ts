import { Injectable, InjectableCreate, } from '@angular/core';
import { HttpClient } from '@angular/common/http';

Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any[]>(`${this.baseUrl}/tasks`);
  }

  createTask(task: any) {
    return this.http.post(`${this.baseUrl}/tasks`, task);
  }
}