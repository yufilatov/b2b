/**
 * Provides the session preparation worker.
 */
export class SessionPreparationWorkerFactory {
    public get(): Worker {
        return new Worker(new URL('./worker', import.meta.url));
    }
}