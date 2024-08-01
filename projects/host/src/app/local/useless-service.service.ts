import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UselessService {

  UUID = `HOST - ${crypto.randomUUID()}`
}
