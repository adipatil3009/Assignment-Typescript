import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatilComponent } from './patil.component';

describe('PatilComponent', () => {
  let component: PatilComponent;
  let fixture: ComponentFixture<PatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
