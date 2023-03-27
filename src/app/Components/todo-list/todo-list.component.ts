import {Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public keyword: string = '';
  public toDoList: any[] = [];

  addToDo(e: any) {
    if (e.keyCode === 13) {
console.log(this.toDoList.length)
        this.toDoList.push({
          title: this.keyword,
          status: 0
        })

        this.keyword = '';
    }
  }

  delete(key:any){

    this.toDoList.splice(key,1)
  }


}
