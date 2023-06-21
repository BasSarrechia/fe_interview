import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDecoratorComponent } from './type-decorator.component';

describe('TypeDecoratorComponent', () => {
  let component: TypeDecoratorComponent;
  let fixture: ComponentFixture<TypeDecoratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeDecoratorComponent]
    });
    fixture = TestBed.createComponent(TypeDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
