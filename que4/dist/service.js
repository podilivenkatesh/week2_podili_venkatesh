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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageAge = exports.sortStudentsByGrade = exports.filterPassedStudents = exports.getStudentNames = exports.createStudent = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
// Create student details
function createStudent(name, age, grade) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = 'INSERT INTO students (name, age, grade) VALUES ($1, $2, $3)';
            const result = yield pgConfig_1.default.query(query, [name, age, grade]);
            return result;
        }
        catch (err) {
            return err;
        }
    });
}
exports.createStudent = createStudent;
// Get all student names
function getStudentNames() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT name FROM students';
        const result = yield pgConfig_1.default.query(query);
        return result.rows;
    });
}
exports.getStudentNames = getStudentNames;
// Filter students whose grade is greater than or equal to 50
function filterPassedStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM students WHERE grade >= 50';
        const result = yield pgConfig_1.default.query(query);
        return result.rows;
    });
}
exports.filterPassedStudents = filterPassedStudents;
// Sort students by grade in ascending order
function sortStudentsByGrade() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT * FROM students ORDER BY grade ASC';
        const result = yield pgConfig_1.default.query(query);
        return result.rows;
    });
}
exports.sortStudentsByGrade = sortStudentsByGrade;
// Get the average age of students
function getAverageAge() {
    return __awaiter(this, void 0, void 0, function* () {
        const query = 'SELECT AVG(age) AS average_age FROM students';
        const result = yield pgConfig_1.default.query(query);
        return result.rows[0].average_age;
    });
}
exports.getAverageAge = getAverageAge;
//# sourceMappingURL=service.js.map