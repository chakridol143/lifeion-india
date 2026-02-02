import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonizerFilterDetails } from './ionizer-filter-details';

describe('IonizerFilterDetails', () => {
  let component: IonizerFilterDetails;
  let fixture: ComponentFixture<IonizerFilterDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IonizerFilterDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IonizerFilterDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
