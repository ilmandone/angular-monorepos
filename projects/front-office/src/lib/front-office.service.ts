import { inject, Injectable } from '@angular/core';
import { BackOfficeService } from 'back-office';

@Injectable({
  providedIn: 'root'
})
export class FrontOfficeService {

  private boSrv = inject(BackOfficeService);

  paolo = this.boSrv.val;
}
