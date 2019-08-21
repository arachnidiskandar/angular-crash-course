import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses() { 
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  //Qnd o checkbox for clickado, vai mudar o estado do to-do e atualizar no "server".
  onToogle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toogleCompleted(todo).subscribe(todo =>{
      console.log(todo)
    });
  }
  onDelete(todo) {
    console.log("delete");
  }
}
