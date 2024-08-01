import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PostData {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reactions
  views: number
  userId: number
}

export interface Reactions {
  likes: number
  dislikes: number
}


@Injectable({
	providedIn: 'root',
})
export class SimpleService {

  private _httpClient = inject(HttpClient)

  getPost(id: number): Observable<PostData> {
    return this._httpClient.get<PostData>(`https://dummyjson.com/posts/${id}`)
  }
}
