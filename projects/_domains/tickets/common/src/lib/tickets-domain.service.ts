import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TicketsDomainService {
  private readonly _ticketVal = signal<number>(50);

  ticketPrice = this._ticketVal.asReadonly();

  setTicketPrice(price: number) {
    this._ticketVal.set(price);
  }

  increaseTicketPrice() {
    this._ticketVal.update(val => val + 1);
  }
}
