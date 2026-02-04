import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutPie } from './donut-pie';

describe('DonutPie', () => {
  let component: DonutPie;
  let fixture: ComponentFixture<DonutPie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutPie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutPie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
