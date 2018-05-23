import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IusiComponent } from './iusi.component';

describe('IusiComponent', () => {
  let component: IusiComponent;
  let fixture: ComponentFixture<IusiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IusiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
