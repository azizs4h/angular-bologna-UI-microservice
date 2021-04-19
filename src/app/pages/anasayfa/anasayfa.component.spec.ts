import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaComponent } from './anasayfa.component';

describe('AnasayfaComponent', () => {
  let component: AnasayfaComponent;
  let fixture: ComponentFixture<AnasayfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnasayfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
