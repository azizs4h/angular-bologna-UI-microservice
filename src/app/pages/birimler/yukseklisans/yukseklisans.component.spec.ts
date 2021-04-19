import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YukseklisansComponent } from './yukseklisans.component';

describe('YukseklisansComponent', () => {
  let component: YukseklisansComponent;
  let fixture: ComponentFixture<YukseklisansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YukseklisansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YukseklisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
