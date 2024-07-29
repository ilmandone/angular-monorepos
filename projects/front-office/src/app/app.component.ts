import { Component, computed, HostBinding, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketsDomainService } from '../../../../libs/tickets/domain/src/public-api';
import { LuggagesDomainService } from '../../../../libs/luggages/domain/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  })
export class AppComponent implements OnInit{

  title = 'front-office';

  ticketSrv = inject(TicketsDomainService);
  luggagesSrv = inject(LuggagesDomainService);

  luggages = computed(() => {
    return Object.entries(this.luggagesSrv.items()).map(([id, v]) => ({...v, id}))
  })

  ngOnInit(): void {
      this.luggagesSrv.addLuggage(self.crypto.randomUUID(), {
        dest: 'Paris',
        ticketID: '1234',
        weight: 10
      })
      this.luggagesSrv.addLuggage(self.crypto.randomUUID(), {
        dest: 'London',
        ticketID: '4557',
        weight: 2
      })
  }
}
