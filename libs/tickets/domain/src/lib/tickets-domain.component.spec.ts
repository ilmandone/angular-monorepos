import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsDomainComponent } from './tickets-domain.component';

describe('TicketsDomainComponent', () => {
  let component: TicketsDomainComponent;
  let fixture: ComponentFixture<TicketsDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketsDomainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
