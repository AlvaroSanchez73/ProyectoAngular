import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionBasicaComponent } from './declaracion-basica.component';

describe('DeclaracionBasicaComponent', () => {
  let component: DeclaracionBasicaComponent;
  let fixture: ComponentFixture<DeclaracionBasicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracionBasicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
