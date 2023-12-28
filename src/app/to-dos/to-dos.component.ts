import { AfterViewInit, Component, Input } from '@angular/core';
import { TodoActionsService } from '../todo-actions.service';

import * as feather from 'feather-icons';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements AfterViewInit{
  @Input() nameTodo: string = '';
  @Input() done: boolean = false;
  @Input() id: number = 0;
  constructor(private TodoActions: TodoActionsService) { }

  ngAfterViewInit() {
    feather.replace();
  }

  removeTodo() {
    this.TodoActions.removeTodo(this.id);
  }

  toggleDone() {
    this.done = !this.done;
    this.TodoActions.todoList[this.id].done = this.done;
    localStorage.setItem('todoList', JSON.stringify(this.TodoActions.todoList));
  }
}
