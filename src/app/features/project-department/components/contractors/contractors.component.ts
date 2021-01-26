import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContractorComponent } from '../add-contractor/add-contractor.component';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {

  constructor( public dialog : MatDialog ){ 

  }

  ngOnInit(): void {
  }

  openAddContractorDialog(){
    const dialogRef = this.dialog.open(AddContractorComponent, {
      width : "90%",
      data : {}
    });
  }

}
