import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];

  title: string;
  usuario: string;
  description: string;
  cantidad: string;

  constructor() {
    // this.tasks = [
    //   {title: 'Create a Website', description: 'Create a wordpress website', hide: true},
    //   {title: 'write a document', description: 'Do other stuff', hide: true}
    // ];
  }

  getTasks() {
    if(localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('tasks') === null) {
      tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task); 
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  deleteTask(task: Task) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task == this.tasks[i]) {
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

  modificartask(task: Task){
    //this.tasks.push(task);
    let tasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      tasks = [];
        if (this.tasks[i].title == task.title) {
            this.tasks[i].description = task.description;
            this.tasks[i].cantidad = task.cantidad;
            this.tasks[i].usuario = task.usuario;
            //tasks.push(task);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        } 
    }
  }
}
