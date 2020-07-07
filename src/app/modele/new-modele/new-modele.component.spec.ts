import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModeleComponent } from './new-modele.component';

describe('NewModeleComponent', () => {
  let component: NewModeleComponent;
  let fixture: ComponentFixture<NewModeleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewModeleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewModeleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
