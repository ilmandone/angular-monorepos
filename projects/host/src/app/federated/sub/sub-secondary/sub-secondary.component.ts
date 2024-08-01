import { Component, inject, OnInit } from '@angular/core';
import { InitRecipie, Recepie } from '../../../local/useless-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-secondary',
  standalone: true,
  imports: [],
  templateUrl: './sub-secondary.component.html',
  styleUrl: './sub-secondary.component.scss'
})
class SubSecondaryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  recepie: Recepie = InitRecipie

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const d = data['recepie']
      if(d)
        this.recepie = data['recepie']
    })
  }
}

export default SubSecondaryComponent