import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSecondaryComponent } from './sub-secondary.component';

describe('SubSecondaryComponent', () => {
  let component: SubSecondaryComponent;
  let fixture: ComponentFixture<SubSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
