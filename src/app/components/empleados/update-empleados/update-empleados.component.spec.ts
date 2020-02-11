import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleadosComponent } from './update-empleados.component';

describe('UpdateEmpleadosComponent', () => {
  let component: UpdateEmpleadosComponent;
  let fixture: ComponentFixture<UpdateEmpleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
