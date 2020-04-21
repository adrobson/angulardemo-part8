import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsHomeComponent } from './funds-home.component';

describe('FundsHomeComponent', () => {
  let component: FundsHomeComponent;
  let fixture: ComponentFixture<FundsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
