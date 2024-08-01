import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { PostData, SimpleService } from './simple.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
	selector: 'app-simple',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './simple.component.html',
	styleUrl: './simple.component.scss',
})
class SimpleComponent {
	private readonly _simpleSrv = inject(SimpleService);
	private readonly _currentID = signal(1);

	readonly post = signal<PostData | null>(null);

	constructor() {
		effect(() => {
			this._simpleSrv
				.getPost(this._currentID())
				.subscribe(post => this.post.set(post));
		});
	}

	loadNewPost() {
    this.post.set(null);
		this._currentID.update(id => id + 1);
	}
}

export default SimpleComponent;
