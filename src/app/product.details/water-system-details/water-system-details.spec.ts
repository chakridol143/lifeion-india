import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSystemDetails } from './water-system-details';

describe('WaterSystemDetails', () => {
  let component: WaterSystemDetails;
  let fixture: ComponentFixture<WaterSystemDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterSystemDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterSystemDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
