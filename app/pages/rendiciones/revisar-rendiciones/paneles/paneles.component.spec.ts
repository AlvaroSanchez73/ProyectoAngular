import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelesComponent } from './paneles.component';

describe('PanelesComponent', () => {
  let component: PanelesComponent;
  let fixture: ComponentFixture<PanelesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
