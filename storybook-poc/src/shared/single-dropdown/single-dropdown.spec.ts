import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDropdown } from './single-dropdown';

describe('SingleDropdown', () => {
  let component: SingleDropdown;
  let fixture: ComponentFixture<SingleDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDropdown);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
