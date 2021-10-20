import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { App_routing } from './app.route'
// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

// Service
import { TaskService } from './services/task.service';
import { HomeComponent } from './components/home/home.component';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { FormsModule } from '@angular/forms';
import { Almacen2Component } from './components/almacen2/almacen2.component';
import { ModificarComponent } from './components/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TasksListComponent,
    TaskComponent,
    TaskFormComponent,
    HomeComponent,
    AlmacenComponent,
    Almacen2Component,
    ModificarComponent,
  ],
  imports: [
    BrowserModule,
    App_routing,
    FormsModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
