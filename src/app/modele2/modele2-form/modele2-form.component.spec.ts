import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modele2FormComponent } from './modele2-form.component';

describe('Modele2FormComponent', () => {
  let component: Modele2FormComponent;
  let fixture: ComponentFixture<Modele2FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modele2FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modele2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});