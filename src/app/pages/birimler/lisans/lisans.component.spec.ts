import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisansComponent } from './lisans.component';

describe('LisansComponent', () => {
  let component: LisansComponent;
  let fixture: ComponentFixture<LisansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
