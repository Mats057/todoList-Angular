import { Component, OnInit } from '@angular/core';
import { TodoActionsService } from './todo-actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  constructor(private TodoActions: TodoActionsService){}

  todoList: any[] = this.TodoActions.todoList;
  title = 'TODO_List_Angular';

  name:string = '';
  addTodo(){
    this.TodoActions.addTodo(
      this.name
    );
    this.name = '';
  }

  checkEnter(event:KeyboardEvent){
    if(event.key == 'Enter'){
      this.addTodo();
    }
  }
  ngOnInit() {


  }
}
