import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoEditComponent } from './egresado-edit.component';

describe('EgresadoEditComponent', () => {
  let component: EgresadoEditComponent;
  let fixture: ComponentFixture<EgresadoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
