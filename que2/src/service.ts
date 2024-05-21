export function doubleNumbers(numbers: number[]): number[] {
    return numbers.map(num => num * 2);
}

export function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}

export function sumNumbers(numbers: number[]): number {
    return numbers.reduce((acc, num) => acc + num, 0);
}

export function logNumbers(numbers: number[]): void {
    numbers.forEach(num => console.log(num));
}

export function hasEvenNumber(numbers: number[]): boolean {
    return numbers.some(num => num % 2 === 0);
}

export function areAllNumbersGreaterThanZero(numbers: number[]): boolean {
    return numbers.every(num => num > 0);
}

export function findFirstEvenNumber(numbers: number[]): number | undefined {
    return numbers.find(num => num % 2 === 0);
}

export function findIndexOfFirstEvenNumber(numbers: number[]): number {
    return numbers.findIndex(num => num % 2 === 0);
}

export function sortNumbers(numbers: number[]): number[] {
    return numbers.slice().sort((a, b) => a - b);
}

export function sliceArray(numbers: number[], start: number, end: number): number[] {
    return numbers.slice(start, end);
}
