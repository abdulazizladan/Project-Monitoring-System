import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsUrl : string = "./assets/monitoring-department/projects.json";
  private lgasUrl : string = "./assets/katsina.json";

  constructor(private _http : HttpClient){ 

    
  }

  getProjects(){
    return this._http.get<any>(this.projectsUrl)
  }

  getLGAS(){
    return this._http.get<any>(this.lgasUrl)
  }

}
