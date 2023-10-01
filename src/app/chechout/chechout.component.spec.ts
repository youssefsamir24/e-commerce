import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChechoutComponent } from './chechout.component';

describe('ChechoutComponent', () => {
  let component: ChechoutComponent;
  let fixture: ComponentFixture<ChechoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChechoutComponent]
    });
    fixture = TestBed.createComponent(ChechoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
