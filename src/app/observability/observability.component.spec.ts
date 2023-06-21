import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabilityComponent } from './observability.component';

describe('ObservabilityComponent', () => {
  let component: ObservabilityComponent;
  let fixture: ComponentFixture<ObservabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservabilityComponent]
    });
    fixture = TestBed.createComponent(ObservabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
