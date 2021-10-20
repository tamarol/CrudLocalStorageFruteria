import { Component, OnInit, Output,Input, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';
@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  @Input() task: Task;
  username: string;
  
  constructor(public taskService: TaskService) { }

  ngOnInit() {
   this.username = localStorage.getItem('user');
   //this.task.title = localStorage.setItem(Key, title);
  }


  modificartask(updateTitle: HTMLInputElement, updateDescription: HTMLInputElement, updateUsuario:HTMLInputElement, updateCantidad:HTMLInputElement){
    this.taskService.modificartask({
      title: updateTitle.value,
      description: updateDescription.value,
      usuario: updateUsuario.value,
      cantidad: updateCantidad.value,
      
      hide: true
    });
    updateTitle.value = '';
    updateDescription.value = '';
    updateUsuario.value = '';
    updateCantidad.value = '';
    return false;
  }
}
