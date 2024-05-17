"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubsetOfArray = exports.removeElementsInRange = exports.deleteElementAtIndex = exports.addElementToEnd = exports.removeLastElement = exports.getArrayLength = void 0;
// logic.ts
function getArrayLength(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        return arr.length;
    });
}
exports.getArrayLength = getArrayLength;
function removeLastElement(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        arr.pop();
        return arr;
    });
}
exports.removeLastElement = removeLastElement;
function addElementToEnd(arr, element) {
    return __awaiter(this, void 0, void 0, function* () {
        arr.push(element);
        return arr;
    });
}
exports.addElementToEnd = addElementToEnd;
function deleteElementAtIndex(arr, index) {
    return __awaiter(this, void 0, void 0, function* () {
        delete arr[index];
        return arr;
    });
}
exports.deleteElementAtIndex = deleteElementAtIndex;
function removeElementsInRange(arr, start, end) {
    return __awaiter(this, void 0, void 0, function* () {
        arr.splice(start, end - start + 1);
        return arr;
    });
}
exports.removeElementsInRange = removeElementsInRange;
function getSubsetOfArray(arr, start, end) {
    return __awaiter(this, void 0, void 0, function* () {
        return arr.slice(start, end);
    });
}
exports.getSubsetOfArray = getSubsetOfArray;
//# sourceMappingURL=service.js.map