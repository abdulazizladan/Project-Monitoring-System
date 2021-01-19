import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsService } from '../../services/notifications.service';
import { StatusDetailsComponent } from '../status-details/status-details.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications : any;

  constructor( private _notificationsService : NotificationsService, public dialog : MatDialog){ 

  }

  ngOnInit(): void{
    this._notificationsService.getNotifications().subscribe(
      res => {
        this.notifications = res;
      },
      err => {
        console.log("ho")
      }
    );
  }

  openDialog(){
    const dialogRef = this.dialog.open(StatusDetailsComponent, {
      width : "90%"
    });  
    }

}
