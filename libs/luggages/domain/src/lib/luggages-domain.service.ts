import { Injectable, signal } from '@angular/core';

export interface Luggage{
  dest: string, weight: number, ticketID: string
}

@Injectable({
  providedIn: 'root'
})
export class LuggagesDomainService {

  private _items = signal<Record<string, Luggage>>({});

  items = this._items.asReadonly();

  addLuggage(id: string, v:Luggage) {
    this._items.update(cv => ({ ...cv, [id]: v }));
  }
}
