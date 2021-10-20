import {RouterModule,Routes} from '@angular/router';
import { AlmacenComponent } from './components/almacen/almacen.component';
import { Almacen2Component } from './components/almacen2/almacen2.component';
import { HomeComponent } from './components/home/home.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { TaskFormComponent } from './components/task-form/task-form.component';



const app_routes: Routes = [
   
    {path: 'home',component: HomeComponent},
    {path: 'task-form',component: TaskFormComponent},
    {path: 'almacen', component: AlmacenComponent},
    {path: 'almacen2', component: Almacen2Component},
    {path: 'modificar', component: ModificarComponent},
    {path: '**', pathMatch:'full',redirectTo:'home'}
];

export const App_routing = RouterModule.forRoot(app_routes);