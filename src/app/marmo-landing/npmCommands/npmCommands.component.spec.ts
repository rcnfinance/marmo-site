import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmCommandsComponent } from './npmCommands.component';

describe('NpmCommandsComponent', () => {
  let component: NpmCommandsComponent;
  let fixture: ComponentFixture<NpmCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpmCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
