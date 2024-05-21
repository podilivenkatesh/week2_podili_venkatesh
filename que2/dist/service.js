"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sliceArray = exports.sortNumbers = exports.findIndexOfFirstEvenNumber = exports.findFirstEvenNumber = exports.areAllNumbersGreaterThanZero = exports.hasEvenNumber = exports.logNumbers = exports.sumNumbers = exports.filterEvenNumbers = exports.doubleNumbers = void 0;
function doubleNumbers(numbers) {
    return numbers.map(num => num * 2);
}
exports.doubleNumbers = doubleNumbers;
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
exports.filterEvenNumbers = filterEvenNumbers;
function sumNumbers(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
exports.sumNumbers = sumNumbers;
function logNumbers(numbers) {
    numbers.forEach(num => console.log(num));
}
exports.logNumbers = logNumbers;
function hasEvenNumber(numbers) {
    return numbers.some(num => num % 2 === 0);
}
exports.hasEvenNumber = hasEvenNumber;
function areAllNumbersGreaterThanZero(numbers) {
    return numbers.every(num => num > 0);
}
exports.areAllNumbersGreaterThanZero = areAllNumbersGreaterThanZero;
function findFirstEvenNumber(numbers) {
    return numbers.find(num => num % 2 === 0);
}
exports.findFirstEvenNumber = findFirstEvenNumber;
function findIndexOfFirstEvenNumber(numbers) {
    return numbers.findIndex(num => num % 2 === 0);
}
exports.findIndexOfFirstEvenNumber = findIndexOfFirstEvenNumber;
function sortNumbers(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
exports.sortNumbers = sortNumbers;
function sliceArray(numbers, start, end) {
    return numbers.slice(start, end);
}
exports.sliceArray = sliceArray;
//# sourceMappingURL=service.js.map