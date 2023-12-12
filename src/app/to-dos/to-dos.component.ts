import { Component, Input, Output } from '@angular/core';
import { TodoActionsService } from '../todo-actions.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent {
  @Input() nameTodo: string = '';
  @Input() done: boolean = false;
  @Input() id: number = 0;
  constructor(private TodoActions: TodoActionsService) { }

  removeTodo() {
    this.TodoActions.removeTodo(this.id);
  }

  toggleDone() {
    this.done = !this.done;
    this.TodoActions.todoList[this.id].done = this.done;
    localStorage.setItem('todoList', JSON.stringify(this.TodoActions.todoList));
  }
}
