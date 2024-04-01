import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DataItem, DataService } from '../../services/data.service';
import { Data } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [CommonModule, CdkTableModule, MatTableModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
    @Input() data: DataItem[] = [];
    @Input() columns: string[] = [];
}
