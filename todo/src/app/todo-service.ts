import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private readonly http: HttpClient) {}

  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  getTodo(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
