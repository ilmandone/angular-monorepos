import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggagesDomainComponent } from './luggages-domain.component';

describe('LuggagesDomainComponent', () => {
  let component: LuggagesDomainComponent;
  let fixture: ComponentFixture<LuggagesDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuggagesDomainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuggagesDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
