import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }



  toogleCompleted(todo: Todo):Observable<any> {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.put<Todo>(url, todo, httpOptions);

  }

  deleteTodo(todo: Todo) {
    const url = `${ this.todosUrl }/${ todo.id }`;
    return this.http.delete(url, httpOptions);
  }

  addTodo(todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

}
