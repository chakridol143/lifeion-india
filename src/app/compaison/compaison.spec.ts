import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compaison } from './compaison';

describe('Compaison', () => {
  let component: Compaison;
  let fixture: ComponentFixture<Compaison>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compaison]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compaison);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
