import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  dataSource : any;
  columnsToDisplay = ['title', 'contractor', 'id'];

  constructor( private projectsService : ProjectsService, public dialog : MatDialog){ 

  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(
      res=>{
        this.dataSource = res;
      },err =>{
        console.log("Cannot fetch data")
      }
    )
  }

  openProjectDetailDialog( id : number){
    const dialogRef = this.dialog.open(ProjectDetailComponent, {
      width : "90%"
    });
  }

  openAddProjectDialog(){
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width : "90%",
      disableClose : true
    });    
  }

}
