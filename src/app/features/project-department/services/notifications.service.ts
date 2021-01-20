import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  private getFeedsUrl : string;

  constructor( private _http : HttpClient){ 
    this.getFeedsUrl = "./assets/monitoring-department/notifications.json";
  }

  getNotifications(){
    return this._http.get<any>(this.getFeedsUrl);
  }
}
