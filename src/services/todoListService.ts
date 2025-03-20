import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TodoListService {
  public API = 'https://dummyjson.com';

  constructor(private _http: HttpClient) {}

  getTodos(): Observable<any> {
    return this._http.get<any>(`${this.API}/todos`);
  }
}
