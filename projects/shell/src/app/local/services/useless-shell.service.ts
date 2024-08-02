import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

export interface Todo {
  id: number
  todo: string
  completed: boolean
  userId: number
}


@Injectable({
  providedIn: 'root'
})
export class UselessShellService {
  private _httpClient = inject(HttpClient);

  UUID = `SHELL - ${crypto.randomUUID()}`

	getValue(): Observable<{title:string, data:Todo}> {
		return this._httpClient
			.get<Todo>('https://dummyjson.com/todos/1')
      .pipe(
				switchMap((r: Todo) => {
					return of({
						title: 'This is a TODO data example',
						data: r,
					});
				})
			);
	}
}
