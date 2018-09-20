import { Component } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (public todoService: TodoService) { }

  addTodo(todo) {
    this.todoService.addTodo({ text: todo });
  }

  public removeTodo(key) {
    this.todoService.removeTodo(key);
  }
}
