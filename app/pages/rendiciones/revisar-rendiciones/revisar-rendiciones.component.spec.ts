import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarRendicionesComponent } from './revisar-rendiciones.component';

describe('RevisarRendicionesComponent', () => {
  let component: RevisarRendicionesComponent;
  let fixture: ComponentFixture<RevisarRendicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarRendicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarRendicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
