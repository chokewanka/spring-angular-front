import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalesComponent } from './create-locales.component';

describe('CreateLocalesComponent', () => {
  let component: CreateLocalesComponent;
  let fixture: ComponentFixture<CreateLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
