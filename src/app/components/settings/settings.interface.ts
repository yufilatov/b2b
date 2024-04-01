export interface Settings {
    timer: number;
    arraySize: number;
    customIds: string[];
}

export const DEFAULT_SETTINGS = {
    timer: 3000,
    arraySize: 1000,
    customIds: ['', '', ''],
}