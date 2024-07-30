import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontOfficeService } from 'front-office';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly fronSrv = inject(FrontOfficeService);

  title = 'Demo application';
}
