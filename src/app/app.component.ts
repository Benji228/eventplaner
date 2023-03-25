import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewTaskDialogComponent } from './new-task-dialog/new-task-dialog.component';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventplaner';

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewTaskDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
}
