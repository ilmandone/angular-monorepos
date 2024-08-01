import { Component, inject, OnInit } from '@angular/core';
import { InitRecipie, Recepie } from '../../../local/useless-service.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sub-secondary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-secondary.component.html',
  styleUrl: './sub-secondary.component.scss'
})
export class SubSecondaryComponent<T> implements OnInit {
  private route = inject(ActivatedRoute);
  recepie!: T

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const d = data['recepie']
      if(d)
        this.recepie = data['recepie']
    })
  }
}
