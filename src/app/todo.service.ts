import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos;
  private basePath = '/todos';
  private listRef;

  constructor( private db: AngularFireDatabase) {
    this.listRef = db.list(this.basePath);
    // this.todos = this.listRef.valueChanges();
    this.todos = this.listRef.snapshotChanges();
  }

  public addTodo(todoKey) {
    this.listRef.push(todoKey);
  }

  public removeTodo(todoToRemove) {
    this.listRef.remove(todoToRemove);
  }
}
