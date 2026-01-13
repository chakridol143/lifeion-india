import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSystems } from './water-systems';

describe('WaterSystems', () => {
  let component: WaterSystems;
  let fixture: ComponentFixture<WaterSystems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterSystems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterSystems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
