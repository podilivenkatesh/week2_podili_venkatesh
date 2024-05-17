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
exports.getAverageAge = exports.sortStudentsByGrade = exports.getStudentNames = exports.filterPassedStudents = void 0;
function filterPassedStudents(students) {
    return __awaiter(this, void 0, void 0, function* () {
        return students.filter(student => student.grade >= 50);
    });
}
exports.filterPassedStudents = filterPassedStudents;
function getStudentNames(students) {
    return __awaiter(this, void 0, void 0, function* () {
        return students.map(student => student.name);
    });
}
exports.getStudentNames = getStudentNames;
function sortStudentsByGrade(students) {
    return __awaiter(this, void 0, void 0, function* () {
        return students.slice().sort((a, b) => a.grade - b.grade);
    });
}
exports.sortStudentsByGrade = sortStudentsByGrade;
function getAverageAge(students) {
    return __awaiter(this, void 0, void 0, function* () {
        const totalAge = students.reduce((acc, student) => acc + student.age, 0);
        return totalAge / students.length;
    });
}
exports.getAverageAge = getAverageAge;
//# sourceMappingURL=service.js.map