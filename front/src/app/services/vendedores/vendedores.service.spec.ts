import { TestBed, inject } from '@angular/core/testing';

import { VendedoresService } from './vendedores.service';

describe('VendedoresService', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     providers: [VendedoresService]
   });
 });

 it('should be created', inject([VendedoresService], (service: VendedoresService) => {
   expect(service).toBeTruthy();
 }));
});
