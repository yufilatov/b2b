import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface DataItem {
    id: string;
    int: number;
    float: number;
    color: string;
    child: {
        id: string;
        color: string;
    }
}

@Injectable({
    providedIn: 'root'
})
export class DataService {
    #worker!: Worker;
    // TO DO
    #dataStream = new BehaviorSubject<DataItem[] | null>(null);
    #customIds: string[] = [];

    constructor() {
        if (typeof Worker !== 'undefined') {
            this.#worker = new Worker(new URL('./../worker', import.meta.url), { type: 'module' });
            this.#worker.onmessage = ({ data }) => { this.prepareData(data) };
        } else {
            console.error('Web Workers is not applied');
        }
    }

    getDataStream(): Observable<DataItem[] | null> {
        return this.#dataStream.asObservable();
    }

    updateWorkerSettings(timer: number, arraySize: number, customIds: string[]) {
        this.#customIds = customIds;
        this.#worker?.postMessage({ timer, arraySize });
    }

    private prepareData(data: DataItem[]) {
        const res = data.slice(-10);
        this.#customIds.forEach((id, i)=> { if (id) { res[i].id = id } })
        this.#dataStream.next(res);
    }
}
