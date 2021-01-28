import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : ()=>import('./features/public/public.module').then(mod => mod.PublicModule)
  },
  {
    path : 'login',
    loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  },  
  {
    path : 'admin',
    loadChildren : ()=>import('./features/project-department/project-department.module').then(mod => mod.ProjectDepartmentModule)
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
