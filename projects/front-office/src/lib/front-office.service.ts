import { computed, inject, Injectable } from '@angular/core';
import { TicketsDomainService } from '@domains/tickets-common';
import { BackOfficeService } from 'back-office';

@Injectable({
  providedIn: 'root',
})
export class FrontOfficeService {
  private readonly _boSrv = inject(BackOfficeService);
  private readonly _ticketSrv = inject(TicketsDomainService);

  ticketPrice = this._ticketSrv.ticketPrice;

  fullInfo = computed(() => {
    return {
      ticketPrice: this.ticketPrice(),
      luggages: this._boSrv.luggages(),
    };
  });

  increaseTicketPrice = this._ticketSrv.increaseTicketPrice.bind(
    this._ticketSrv
  );

  resetTicketPrice() {
    this._ticketSrv.setTicketPrice(50);
  }
}
