import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M3LibComponent } from './m3-lib.component';

describe('M3LibComponent', () => {
  let component: M3LibComponent;
  let fixture: ComponentFixture<M3LibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [M3LibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M3LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
