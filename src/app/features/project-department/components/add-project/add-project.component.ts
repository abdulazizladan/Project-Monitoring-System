import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  LGAs : any;

  public addProjectForm : any;
  

  constructor( private projectService : ProjectsService, private fb : FormBuilder){ 

  }

  ngOnInit(): void {
    this.projectService.getLGAS().subscribe(
      res=>{
        this.LGAs = res.LGA
      },err=>{

      }
    );

    this.addProjectForm = this.fb.group({
      contractor : ['', Validators.required],
      title : ['', Validators.required],
      description : ['', Validators.required],
      LGA : ['', Validators.required],
      town : ['', Validators.required]
    })
  }

}
