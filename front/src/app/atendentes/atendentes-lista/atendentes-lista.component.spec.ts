import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesListaComponent } from './atendentes-lista.component';

describe('AtendentesListaComponent', () => {
  let component: AtendentesListaComponent;
  let fixture: ComponentFixture<AtendentesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtendentesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendentesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
