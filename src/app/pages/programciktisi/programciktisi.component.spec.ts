import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramciktisiComponent } from './programciktisi.component';

describe('ProgramciktisiComponent', () => {
  let component: ProgramciktisiComponent;
  let fixture: ComponentFixture<ProgramciktisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramciktisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramciktisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
