import { Injectable, signal } from '@angular/core';

export type Luggage = {
  id: number;
  destination: string;
  departure: string;
}

export type Luggages = Luggage[]

@Injectable({
  providedIn: 'root'
})
export class BackOfficeService {

  private _luggages = signal<Luggages>([ { id: 1, destination: 'Paris', departure: 'London' } ]);

  luggages = this._luggages.asReadonly();

  addLuggage(luggage: Luggage) {
    this._luggages.update(luggages => [...luggages, luggage]);
  }
}
