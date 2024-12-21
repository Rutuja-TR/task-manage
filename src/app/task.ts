export interface Task {
    id: number;
    title: string;
    description?: string; // Optional field
    priority: 'Low' | 'Medium' | 'High'; // Priority of the task
    status: 'Pending' | 'In Progress' | 'Completed'; // Status of the task
  }