import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { TodoList } from "../models/todolist";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoLists: TodoList[];

  constructor(
    private userService: UserService
  ) {
    this.userService.getUserTodoList().subscribe(res => {
      this.todoLists = res;
    });
  }

  ngOnInit() {
  }
}
