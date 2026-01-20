import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFACTS } from './water-facts';

describe('WaterFACTS', () => {
  let component: WaterFACTS;
  let fixture: ComponentFixture<WaterFACTS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterFACTS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterFACTS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
