import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessOpportunities } from './bussiness-opportunities';

describe('BussinessOpportunities', () => {
  let component: BussinessOpportunities;
  let fixture: ComponentFixture<BussinessOpportunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessOpportunities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessOpportunities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
