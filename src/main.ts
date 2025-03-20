import { Component, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListService } from './services/todoListService';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  providers: [TodoListService],
  template: `
    <h1> ToSignal used </h1>
    toSignal      - to create signal which track values of Observable.
      <hr>
      toObservable. - to create observable which track values of Signal.
      <hr>
    <details>
      <summary style="color: red"> Using toSignal - TODOs</summary>
      @if(todoSignalList()){
        <ul>
          <li style="color: red;" *ngFor="let data of todoSignalList()?.todos">
            <p>ID: {{ data.id }}</p>
            <p>Description: {{ data.todo }}</p>
            <p>Completed: {{ data.completed }}</p>
            <hr>
          </li>
        </ul>
      } @else{
        <div>Data is not present</div>
      }

    </details>
      <br>
    <details>
      <summary style="color: blue"> Using RxJs - TODOs</summary>
      @if(todoSignalList()){
        <ul>
          <li style="color: blue;" *ngFor="let data of todoSignalList()?.todos">
            <p>ID: {{ data.id }}</p>
            <p>Description: {{ data.todo }}</p>
            <p>Completed: {{ data.completed }}</p>
            <hr>
          </li>
        </ul>
      } @else{
        <div>Data is not present</div>
      }
    </details>
  `,
})
export class App {
  name = 'Angular';
  todoRxJsList: any;
  todoSignalList = toSignal(this._dummyData.getTodos());

  constructor(private _dummyData: TodoListService) {}

  ngOnInint() {
    this.todoRxJsList = this._dummyData.getTodos();
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
