import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsDomainService {

  private _value = signal<number>(50)

  value = this._value.asReadonly()

  setValue(value: number) {
    this._value.set(value)
  }
}
