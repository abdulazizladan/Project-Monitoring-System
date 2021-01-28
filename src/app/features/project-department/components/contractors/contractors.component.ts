import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { ContractorsService } from '../../services/contractors.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {

  dataSource : any;
  columnsToDisplay = ['title', 'contractor', 'id'];

  constructor( public dialog : MatDialog, private contractorsService : ContractorsService ){ 

  }

  ngOnInit(): void {
    this.contractorsService.getContractors().subscribe(
      res => {
        this.dataSource = res;
      },err => {
        console.log("Cannot fetch data")
      }
    )
  }

  openAddContractorDialog(){
    const dialogRef = this.dialog.open(AddContractorComponent, {
      width : "90%",
      disableClose : true,
      data : {}
    });
    
  }

}
