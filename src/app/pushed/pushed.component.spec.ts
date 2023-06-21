import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushedComponent } from './pushed.component';

describe('PushedComponent', () => {
  let component: PushedComponent;
  let fixture: ComponentFixture<PushedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PushedComponent]
    });
    fixture = TestBed.createComponent(PushedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
