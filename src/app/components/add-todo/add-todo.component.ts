import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    };
    
  }
}
