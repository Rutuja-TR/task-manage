import { Injectable } from '@angular/core';
import { Task } from './task';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  constructor() {
    // Example data
    this.tasks.next([
      { id: 1, title: 'Task 1', status: 'Pending', priority: 'High' },
      { id: 2, title: 'Task 2', status: 'In Progress', priority: 'Medium' },
      { id: 3, title: 'Task 3', status: 'Completed', priority: 'Low' },
      { id: 4, title: 'Task 4', status: 'Pending', priority: 'Low' },
      { id: 5, title: 'Task 5', status: 'In Progress', priority: 'High' },
    ]);
  }

  getAllTasks() {
    return this.tasks$;
  }

  addTask(task: Task) {
    const currentTasks = this.tasks.getValue();
    this.tasks.next([...currentTasks, task]);
  }

  updateTask(updatedTask: Task) {
    const currentTasks = this.tasks.getValue();
    const index = currentTasks.findIndex((task) => task.id === updatedTask.id);
    currentTasks[index] = updatedTask;
    this.tasks.next([...currentTasks]);
  }

  deleteTask(id: number) {
    const currentTasks = this.tasks.getValue();
    this.tasks.next(currentTasks.filter((task) => task.id !== id));
  }
}
