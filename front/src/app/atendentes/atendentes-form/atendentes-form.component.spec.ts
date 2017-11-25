import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendentesFormComponent } from './atendentes-form.component';

describe('AtendentesFormComponent', () => {
 let component: AtendentesFormComponent;
 let fixture: ComponentFixture<AtendentesFormComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ AtendentesFormComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(AtendentesFormComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});



