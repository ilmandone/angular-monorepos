import { Component, Inject, inject } from '@angular/core';
import { UselessService } from '../../../local/useless-service.service';

@Component({
	selector: 'app-sub-default',
	standalone: true,
	imports: [],
	templateUrl: './sub-default.component.html',
	styleUrl: './sub-default.component.scss',
})
class SubDefaultComponent {
	constructor(@Inject('useless-service') public uselessSrv: UselessService) {
    this.uselessSrv.UUID
   }
}

export default SubDefaultComponent;
