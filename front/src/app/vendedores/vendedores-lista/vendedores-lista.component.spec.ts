import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedoresListaComponent } from './vendedores-lista.component';

describe('VendedoresListaComponent', () => {
  let component: VendedoresListaComponent;
  let fixture: ComponentFixture<VendedoresListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedoresListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedoresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});