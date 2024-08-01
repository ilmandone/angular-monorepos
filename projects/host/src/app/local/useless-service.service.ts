import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';

export interface Recepie {
  id: number
  name: string
  ingredients: string[]
  instructions: string[]
  prepTimeMinutes: number
  cookTimeMinutes: number
  servings: number
  difficulty: string
  cuisine: string
  caloriesPerServing: number
  tags: string[]
  userId: number
  image: string
  rating: number
  reviewCount: number
  mealType: string[]
}

export const InitRecipie: Recepie = {
  id: 0,
  name: '',
  ingredients: [],
  instructions: [],
  prepTimeMinutes: 0,
  cookTimeMinutes: 0,
  servings: 0,
  difficulty: '',
  cuisine: '',
  caloriesPerServing: 0,
  tags: [],
  userId: 0,
  image: '',
  rating: 0,
  reviewCount: 0,
  mealType: []
}


@Injectable({
	providedIn: 'root',
})
export class UselessService {
	private _httpClient = inject(HttpClient);

	UUID = `HOST - ${crypto.randomUUID()}`;

	getUserMe(): Observable<Recepie> {
		return this._httpClient
			.get<Recepie>('https://dummyjson.com/recipes/1')
	}
}
