import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirimlerComponent } from './birimler.component';

describe('BirimlerComponent', () => {
  let component: BirimlerComponent;
  let fixture: ComponentFixture<BirimlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirimlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirimlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
