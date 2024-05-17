// logic.ts
export async function getArrayLength(arr: number[]): Promise<number> {
    return arr.length;
}

export async function removeLastElement(arr: number[]): Promise<number[]> {
    arr.pop();
    return arr;
}

export async function addElementToEnd(arr: number[], element: number): Promise<number[]> {
    arr.push(element);
    return arr;
}

export async function deleteElementAtIndex(arr: number[], index: number): Promise<number[]> {
    delete arr[index];
    return arr;
}

export async function removeElementsInRange(arr: number[], start: number, end: number): Promise<number[]> {
    arr.splice(start, end - start + 1);
    return arr;
}

export async function getSubsetOfArray(arr: number[], start: number, end: number): Promise<number[]> {
    return arr.slice(start, end);
}
