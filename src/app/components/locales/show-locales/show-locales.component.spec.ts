import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLocalesComponent } from './show-locales.component';

describe('ShowLocalesComponent', () => {
  let component: ShowLocalesComponent;
  let fixture: ComponentFixture<ShowLocalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLocalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
