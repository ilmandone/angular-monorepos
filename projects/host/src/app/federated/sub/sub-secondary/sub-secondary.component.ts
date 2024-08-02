import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-sub-secondary',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sub-secondary.component.html',
	styleUrl: './sub-secondary.component.scss',
})
export class SubSecondaryComponent<T extends Object> implements OnInit {
	private route = inject(ActivatedRoute);
	value!: {title: string; data: T};

	ngOnInit(): void {
		this.route.data.subscribe(data => {
			const d = data['value'] as T;

			if (d) {
				this.value = data['value'];
			}
		});
	}
}
