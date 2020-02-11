import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowConocimientosComponent } from './show-conocimientos.component';

describe('ShowConocimientosComponent', () => {
  let component: ShowConocimientosComponent;
  let fixture: ComponentFixture<ShowConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
