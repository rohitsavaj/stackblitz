import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRelated } from './rxjs-related';

describe('RxjsRelated', () => {
  let component: RxjsRelated;
  let fixture: ComponentFixture<RxjsRelated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsRelated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsRelated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
