import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRingPie } from './multi-ring-pie';

describe('MultiRingPie', () => {
  let component: MultiRingPie;
  let fixture: ComponentFixture<MultiRingPie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiRingPie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiRingPie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
