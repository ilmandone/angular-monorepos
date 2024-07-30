import { computed, inject, Injectable, signal } from '@angular/core';
import { BackOfficeService } from 'back-office';

@Injectable({
  providedIn: 'root',
})
export class FrontOfficeService {
  private readonly _boSrv = inject(BackOfficeService);
  private readonly _ticketVal = signal<number>(50);

  ticketPrice = this._ticketVal.asReadonly();

  fullInfo = computed(() => {
    return {
      ticketPrice: this._ticketVal(),
      luggages: this._boSrv.luggages(),
    };
  });

  setTicketPrice(price: number) {
    this._ticketVal.set(price);
  }
}
