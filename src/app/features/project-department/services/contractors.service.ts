import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractorsService {

  private getContractorsUrl : string = "./assets/monitoring-department/contractors.json";
  
  constructor( private _http : HttpClient ){ 

  }

  getContractors(){
    return this._http.get<any>(this.getContractorsUrl);
  }

  addContractor(){

  }
}
