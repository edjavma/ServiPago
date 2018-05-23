import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorAguaComponent } from './contador-agua.component';

describe('ContadorAguaComponent', () => {
  let component: ContadorAguaComponent;
  let fixture: ComponentFixture<ContadorAguaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorAguaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
