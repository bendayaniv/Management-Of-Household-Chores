import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) { }

  public getAllTasks(): Observable<Task[]> {
      return this.httpClient.get<Task[]>("http://localhost:3001/api/todo");
  }

  public addTask(task: Task): Observable<Task> {
      return this.httpClient.post<Task>("http://localhost:3001/api/todo", task);
  }

  public getTasksOfSpecificMember(id: number): Observable<Task[]> {
      return this.httpClient.get<Task[]>("http://localhost:3001/api/todo/member/" + id);
  }

  public deleteTask(id: number): Observable<Task> {
      return this.httpClient.delete<Task>("http://localhost:3001/api/todo/" + id);
  }

}
