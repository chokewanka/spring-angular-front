import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConocimientosComponent } from './form-conocimientos.component';

describe('FormConocimientosComponent', () => {
  let component: FormConocimientosComponent;
  let fixture: ComponentFixture<FormConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
