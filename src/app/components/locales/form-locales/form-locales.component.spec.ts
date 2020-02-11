import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocalesComponent } from './form-locales.component';

describe('FormLocalesComponent', () => {
  let component: FormLocalesComponent;
  let fixture: ComponentFixture<FormLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
