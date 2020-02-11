import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLocalesComponent } from './update-locales.component';

describe('UpdateLocalesComponent', () => {
  let component: UpdateLocalesComponent;
  let fixture: ComponentFixture<UpdateLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
