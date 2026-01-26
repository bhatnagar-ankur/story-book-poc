import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusChips } from './status-chips';

describe('StatusChips', () => {
  let component: StatusChips;
  let fixture: ComponentFixture<StatusChips>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusChips]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusChips);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
