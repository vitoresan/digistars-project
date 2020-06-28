import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacoesBinariasComponent } from './operacoes-binarias.component';

describe('OperacoesBinariasComponent', () => {
  let component: OperacoesBinariasComponent;
  let fixture: ComponentFixture<OperacoesBinariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperacoesBinariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperacoesBinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
