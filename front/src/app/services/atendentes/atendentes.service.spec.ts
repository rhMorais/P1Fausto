import { TestBed, inject } from '@angular/core/testing';

import { AtendentesService } from './atendentes.service';

describe('AtendentesService', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     providers: [AtendentesService]
   });
 });

 it('should be created', inject([AtendentesService], (service: AtendentesService) => {
   expect(service).toBeTruthy();
 }));
});

 

