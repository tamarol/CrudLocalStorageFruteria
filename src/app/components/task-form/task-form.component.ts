import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task;
  username: string;
  
  constructor(public taskService: TaskService) { }

  ngOnInit() {
   this.username = localStorage.getItem('user');
   //this.task.title = localStorage.setItem(Key, title);
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement, newUsuario:HTMLInputElement, newCantidad:HTMLInputElement){
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      usuario: newUsuario.value,
      cantidad: newCantidad.value,

      hide: true
    });
    newTitle.value = '';
    newDescription.value = '';
    newUsuario.value = '';
    newCantidad.value = '';
    return false;
  }

  modificartask(updateTitle: HTMLInputElement, updateDescription: HTMLInputElement, updateUsuario:HTMLInputElement, updateCantidad:HTMLInputElement){
    this.taskService.modificartask({
      title: updateTitle.value,
      description: updateDescription.value,
      usuario: updateUsuario.value,
      cantidad: updateCantidad.value,
      
      hide: true,
    });
    updateTitle.value = '';
    updateDescription.value = '';
    updateUsuario.value = '';
    updateCantidad.value = '';
    return false;
  }
}
