import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDefaultComponent } from './sub-default.component';

describe('SubDefaultComponent', () => {
  let component: SubDefaultComponent;
  let fixture: ComponentFixture<SubDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
