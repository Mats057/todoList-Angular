import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoActionsService implements OnInit{

  constructor() { }

  ngOnInit(){
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  todoList: any[] = JSON.parse(localStorage.getItem('todoList') || '[]');


  addTodo(name:string){
    if(name == '' || name.trim().length == 0) {alert('Digite algo'); return};
    if(name.length > 75) {alert('Máximo de 75 caracteres'); return};
    this.todoList.push({name: name, done: false});
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  removeTodo(id:number){
    this.todoList.splice(id, 1);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
