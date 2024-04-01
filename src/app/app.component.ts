import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { MainComponent } from './components/main/main.component';
import { DataItem, DataService } from './services/data.service';
import { BehaviorSubject, Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Settings } from './components/settings/settings.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, SettingsComponent, MainComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'b2b';
    columns: string[] = ['id', 'int', 'float', 'color', 'child'];
    dataStream$: Subject<DataItem[] | null> = new BehaviorSubject<DataItem[] | null>(null);

    #dataService = inject(DataService);
    #destroy = new Subject();

    ngOnInit(): void {
        this.#dataService.getDataStream()
            // .pipe(tap(d => console.log('DATA: ', d)))
            .pipe(takeUntil(this.#destroy))
            .subscribe(data => this.dataStream$.next(data));
    }

    applySettings(event: Settings): void {
        const { timer, arraySize, customIds } = event;
        this.#dataService.updateWorkerSettings(timer, arraySize, customIds);
    }

    ngOnDestroy(): void {
        this.#destroy.complete();
    }
}
