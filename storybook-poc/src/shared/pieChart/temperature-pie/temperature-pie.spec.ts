import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturePie } from './temperature-pie';

describe('TemperaturePie', () => {
  let component: TemperaturePie;
  let fixture: ComponentFixture<TemperaturePie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperaturePie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturePie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
