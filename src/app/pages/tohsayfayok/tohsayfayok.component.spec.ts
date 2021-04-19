import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TohsayfayokComponent } from './tohsayfayok.component';

describe('TohsayfayokComponent', () => {
  let component: TohsayfayokComponent;
  let fixture: ComponentFixture<TohsayfayokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TohsayfayokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TohsayfayokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
