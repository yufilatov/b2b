import { DataItem } from "./services/data.service";

addEventListener('message', ({ data }) => {
    const { timer, arraySize } = data;
    setInterval(() => postMessage(Array.from({length: arraySize}, () => generateDataItem())), timer);
});

function generateDataItem(): DataItem {
    return {
        id: generateId(),
        int: generateInt(),
        float: generateFloat(),
        color: getColor(),
        child: { id: generateId(), color: getColor() },
    };
}

function generateId(): string {
    return Math.random().toString(36).substring(2, 15);
}

function generateInt(): number {
    return Math.floor(Math.random() * 1000)
}

function generateFloat(): number {
    return parseFloat(Math.random().toFixed(18));
}

function getColor(): string {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0')
}