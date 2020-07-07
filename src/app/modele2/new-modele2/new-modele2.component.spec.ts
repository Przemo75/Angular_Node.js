import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModele2Component } from './new-modele2.component';

describe('NewModele2Component', () => {
  let component: NewModele2Component;
  let fixture: ComponentFixture<NewModele2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModele2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModele2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});