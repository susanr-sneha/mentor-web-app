import { AuthenticationComponent } from './../authentication/authentication.component';
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  agreed = 0;
  disagreed = 0;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  onLogin(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
    console.log(this.agreed, this.disagreed);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AuthenticationComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
