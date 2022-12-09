import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuroductDetailsComponent } from './puroduct-details.component';

describe('PuroductDetailsComponent', () => {
  let component: PuroductDetailsComponent;
  let fixture: ComponentFixture<PuroductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuroductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuroductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
