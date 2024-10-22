import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3InputComponent } from './m3-input.component';

describe('M3InputComponent', () => {
  let component: M3InputComponent;
  let fixture: ComponentFixture<M3InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3InputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
