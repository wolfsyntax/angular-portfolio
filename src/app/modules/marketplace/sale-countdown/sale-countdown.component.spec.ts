import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleCountdownComponent } from './sale-countdown.component';

describe('SaleCountdownComponent', () => {
  let component: SaleCountdownComponent;
  let fixture: ComponentFixture<SaleCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleCountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SaleCountdownComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
