import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { DataService } from '../../services/data.service';
import { FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Data } from '@angular/router';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;
    let dataService: DataService;
    // let booksServiceMock!: { updateWorkerSettings: jest.Mock }; // the mock value
    
    beforeEach((): void => {
        TestBed.configureTestingModule({
          imports: [SettingsComponent, BrowserAnimationsModule],
        //   providers: [FormBuilder, {provide: DataService, useValue: booksServiceMock}]
          providers: [FormBuilder, DataService]
        }).compileComponents();

        dataService = TestBed.inject(DataService);
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it('should create', () => {
        expect(component).toBeDefined();
    });

    it('should call updateWorkerSettings on DataService with correct values', () => {
        component.settingsForm.controls['timer'].setValue(1000);
        component.settingsForm.controls['arraySize'].setValue(1000);
        component.settingsForm.controls['customIds'].setValue(['1', '2', '3']);
        
        expect(dataService.updateWorkerSettings).toHaveBeenCalledWith(1000, 1000, ['1', '2', '3']);
      });
});
