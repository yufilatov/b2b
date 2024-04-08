import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('SettingsComponent', () => {
    let component: SettingsComponent;
    let fixture: ComponentFixture<SettingsComponent>;

    beforeEach((): void => {
        TestBed.configureTestingModule({
            imports: [SettingsComponent],
            providers: [provideAnimations()],
        });
    });

    beforeEach((): void => {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        jest.spyOn(component.onSettingsChange, 'emit');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit output when changeSettings executed', () => {
        component.changeSettings();

        expect(component.onSettingsChange.emit).toHaveBeenCalled();
    });

    it('should emit output when changeSettings executed with control values', () => {
        component.settingsForm.controls['timer'].setValue(1000);
        component.settingsForm.controls['arraySize'].setValue(1000);
        component.settingsForm.controls['customIds'].setValue(['1', '2', '3']);

        component.changeSettings();

        expect(component.onSettingsChange.emit).toHaveBeenCalledWith({
            timer: 1000,
            arraySize: 1000,
            customIds: ['1', '2', '3'],
        });
    });

    it('should not emit output when changeSettings executed with control value types', () => {
        component.settingsForm.controls['timer'].setValue(1000);
        component.settingsForm.controls['arraySize'].setValue(1000);
        component.settingsForm.controls['customIds'].setValue(['1', '2', '3']);

        component.changeSettings();

        expect(component.onSettingsChange.emit).not.toHaveBeenCalledWith({
            timer: '1000',
            arraySize: '1000',
            customIds: [1, 2, 3],
        });
    });
});
