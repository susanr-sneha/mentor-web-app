import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatFormField} from '@angular/material';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-authentication',
  templateUrl: 'authentication.component.html',
})
export class AuthenticationComponent {

  constructor(
    public dialogRef: MatDialogRef<AuthenticationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


// @Component({
//   selector: 'app-authentication',
//   templateUrl: './authentication.component.html',
//   styleUrls: ['./authentication.component.css']
// })
// export class AuthenticationComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
