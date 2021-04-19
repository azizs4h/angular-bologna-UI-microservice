import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlisansComponent } from './onlisans.component';

describe('OnlisansComponent', () => {
  let component: OnlisansComponent;
  let fixture: ComponentFixture<OnlisansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlisansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
