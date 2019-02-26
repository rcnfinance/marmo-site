import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilanguajeComponent } from './multilanguaje.component';

describe('MultilanguajeComponent', () => {
  let component: MultilanguajeComponent;
  let fixture: ComponentFixture<MultilanguajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultilanguajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultilanguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
