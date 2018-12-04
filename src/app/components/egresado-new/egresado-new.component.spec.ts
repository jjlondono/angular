import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgresadoNewComponent } from './egresado-new.component';

describe('EgresadoNewComponent', () => {
  let component: EgresadoNewComponent;
  let fixture: ComponentFixture<EgresadoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgresadoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgresadoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
