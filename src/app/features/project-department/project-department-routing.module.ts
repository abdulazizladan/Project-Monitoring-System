import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { MessagesComponent } from './components/messages/messages.component';


const routes: Routes = [
  {
    path : '',
    component : DashboardComponent,
    children : [
      {
        path : '',
        redirectTo : 'home'
      },
      {
        path : 'home',
        component : NotificationsComponent
      },
      {
        path : 'projects',
        component : ProjectsComponent
      },
      {
        path : 'contractors',
        component : ContractorsComponent
      },
      {
        path : 'messages',
        component : MessagesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDepartmentRoutingModule { }
