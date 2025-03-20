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
    <h1> Angular 16: Signals Vs RxJS Stream
    </h1>
   
    <details>
      <summary style="color: red"> Using Signals - TODOs</summary>
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
      <br>
    <details>
    <summary style="color: green" (click)=toggle()>One Line Explanation
    @if(showOneLine){
      <ul>
        <li> toSignal: create signal which track values of Observable.
        </li>
        <li> toObservable: create observable which track values of Signal.
        </li>
      </ul>
    }
    </summary>
  </details>

  <br>
  <li>
  <a href="https://www.linkedin.com/in/aditya-singh621/"> My LinkedIn </a>
  </li>
  <!--
  <details>
    <summary> LinkedIn
    @if(showLinkedin){
      <ul>
        
        <li>Check Latest Post
        <a href="https://www.linkedin.com/in/aditya-singh621/"></a>
        </li>
      </ul>
    }
    </summary>
  </details>
  -->
  `,
})
export class App {
  name = 'Angular';
  showOneLine = false;
  showLinkedin = false;
  todoRxJsList: any;
  todoSignalList = toSignal(this._dummyData.getTodos());

  constructor(private _dummyData: TodoListService) { }

  ngOnInint() {
    this.todoRxJsList = this._dummyData.getTodos();
  }

  toggle() {
    this.showOneLine = !this.showOneLine
  }

  // toggleLinkedIn() {
  //   this.showLinkedin = !this.showLinkedin
  // }
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
