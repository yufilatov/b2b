import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DEFAULT_SETTINGS, Settings } from './settings.interface';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, MatButtonModule, MatInputModule, MatFormFieldModule],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {
    @Input() settings: Settings = DEFAULT_SETTINGS;
    @Output() onSettingsChange = new EventEmitter<Settings>();

    settingsForm!: FormGroup;
    #fb = inject(FormBuilder);
    
    get customIds(): FormArray {
        return this.settingsForm.get('customIds') as FormArray;
    }

    ngOnInit(): void {
        this.settingsForm = this.#fb.group({
            timer: [this.settings.timer, [Validators.required, Validators.min(1)]],
            arraySize: [this.settings.arraySize, [Validators.required, Validators.min(1)]],
            customIds: this.#fb.array(this.settings.customIds.map((s) => this.#fb.control(s))),
        });
    }

    changeSettings(): void {
        if (this.settingsForm.valid) {
            const values = this.settingsForm.value;
            this.onSettingsChange.emit({
                timer: values.timer,
                arraySize: values.arraySize,
                customIds: values.customIds,
            });
        }
    }
}
