import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from '../task';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskService } from '../task.service';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-task-management',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatSelectModule, MatDialogModule,CommonModule,FormsModule],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.css'
})
export class TaskManagementComponent implements OnInit {
  displayedColumns: string[] = ['title', 'status', 'priority', 'actions'];
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterStatus: string = '';
  private taskService = inject(TaskService);
  private dialog = inject(MatDialog);

  ngOnInit() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
      this.applyFilter();
    });
  }

  openAddEditTaskDialog(task?: Task) {
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '600px',
      height:'600px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (task) {
          this.taskService.updateTask(result);
        } else {
          this.taskService.addTask(result);
        }
      }
    });
  }

  deleteTask(task: Task) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(task.id);
    }
  }

  applyFilter() {
    // Check if a filter is selected
    if (this.filterStatus) {
      // Filter tasks based on the selected status
      this.filteredTasks = this.tasks.filter((task) => task.status === this.filterStatus);
    } else {
      // If no filter is selected, show all tasks
      this.filteredTasks = [...this.tasks];
    }
  }
  
}
