import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoktoraComponent } from './doktora.component';

describe('DoktoraComponent', () => {
  let component: DoktoraComponent;
  let fixture: ComponentFixture<DoktoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoktoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoktoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
