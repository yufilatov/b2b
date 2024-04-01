import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';

describe('DataService', () => {
    let service: DataService;
    let mockWorker: Worker;

    beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [DataService]
        });
      });

    it('should be created', inject([DataService], (service: DataService) => {
        expect(service).toBeTruthy();
      }));

    it('should update worker settings', () => {
        const timer = 1000;
        const arraySize = 1000;
        const customIds = ['1', '2', '3'];
        service.updateWorkerSettings(timer, arraySize, customIds);
    });
});
