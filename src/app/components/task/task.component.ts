import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }

  deleteTask(task: Task) {
    if(confirm('Estas seguro que quieres borrar este producto?')) {
      this.taskService.deleteTask(task);
    }
  }

  seleccionar(Task: Task){
    Task={...Task}//crea una copia 
  }

}
