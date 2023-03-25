import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-task-dialog',
  templateUrl: './new-task-dialog.component.html',
  styleUrls: ['./new-task-dialog.component.css'],
})
export class NewTaskDialogComponent {
  empForm: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      title: '',
      datestart: '',
      dateend: '',
      category: '',
      description: '',
      participants: '',
      subtasks: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm);
    }
  }

  /**Kategorien Variablen */
  subTaskCategory: string[] = [
    'Decoration',
    'Games',
    'Cooking',
    'Set Up',
    'Clean Up',
  ];

  /*Hinzufügen von Unteraufgaben beim erstellen eines Tasks*/

  panelOpenState = false;

  /*Datepicker */
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
