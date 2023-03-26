import {Component, Input} from '@angular/core';
import {Task} from "../shared/model/task.model";

@Component({
  selector: 'app-new-task-card',
  templateUrl: './new-task-card.component.html',
  styleUrls: ['./new-task-card.component.css']
})
export class NewTaskCardComponent {

  @Input() task!: Task;

}
