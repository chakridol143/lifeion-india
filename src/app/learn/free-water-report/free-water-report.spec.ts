import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWaterReport } from './free-water-report';

describe('FreeWaterReport', () => {
  let component: FreeWaterReport;
  let fixture: ComponentFixture<FreeWaterReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeWaterReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeWaterReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
