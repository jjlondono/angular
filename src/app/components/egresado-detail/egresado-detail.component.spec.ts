import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoDetailComponent } from './egresado-detail.component';

describe('EgresadoDetailComponent', () => {
  let component: EgresadoDetailComponent;
  let fixture: ComponentFixture<EgresadoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
