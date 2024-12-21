import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskManagementComponent } from './task-management/task-management.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TaskManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'task-management';
}
