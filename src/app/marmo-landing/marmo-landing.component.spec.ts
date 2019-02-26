import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmoLandingComponent } from './marmo-landing.component';

describe('MarmoLandingComponent', () => {
  let component: MarmoLandingComponent;
  let fixture: ComponentFixture<MarmoLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarmoLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmoLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
