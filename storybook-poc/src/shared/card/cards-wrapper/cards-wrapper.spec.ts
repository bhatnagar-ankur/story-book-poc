import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWrapper } from './cards-wrapper';

describe('CardsWrapper', () => {
  let component: CardsWrapper;
  let fixture: ComponentFixture<CardsWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsWrapper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
