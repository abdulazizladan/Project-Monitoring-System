import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AddProjectComponent } from './components/add-project/add-project.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { MessagesComponent } from './components/messages/messages.component';

//Material components
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

import { ProjectDepartmentRoutingModule } from './project-department-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatusDetailsComponent } from './components/status-details/status-details.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';


@NgModule({
  declarations: [
    DashboardComponent, 
    AddProjectComponent, 
    AddContractorComponent, 
    NotificationsComponent, 
    ProjectsComponent, 
    ContractorsComponent, 
    MessagesComponent, StatusDetailsComponent, ProjectDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTableModule,
    ProjectDepartmentRoutingModule
  ]
})
export class ProjectDepartmentModule { }
