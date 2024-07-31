import { inject, Injectable } from '@angular/core';
import { Luggage, LuggagesDomainService } from '@domains/luggages-common';

@Injectable({
  providedIn: 'root',
})
export class BackOfficeService {
  private _luggagesSrv = inject(LuggagesDomainService);

  luggages = this._luggagesSrv.luggages;

  addLuggage(luggage: Luggage) {
    this._luggagesSrv.addLuggage(luggage);
  }
}
