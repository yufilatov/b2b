

export class SessionPreparationWorkerFactory {
    public get(): Worker {
        return new Worker(new URL('./worker', ''));
    }
}