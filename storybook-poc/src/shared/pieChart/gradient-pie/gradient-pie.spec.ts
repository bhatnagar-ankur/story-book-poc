import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientPie } from './gradient-pie';

describe('GradientPie', () => {
  let component: GradientPie;
  let fixture: ComponentFixture<GradientPie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradientPie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradientPie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
