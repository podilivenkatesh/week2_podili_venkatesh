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
// app.ts
const express_1 = __importDefault(require("express"));
const pgConfig_1 = require("./pgConfig");
const service_1 = require("./service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/passed-students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, pgConfig_1.fetchStudents)();
        const passedStudents = yield (0, service_1.filterPassedStudents)(students);
        res.json(passedStudents);
    }
    catch (error) {
        console.error('Error filtering passed students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.get('/student-names', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, pgConfig_1.fetchStudents)();
        const studentNames = yield (0, service_1.getStudentNames)(students);
        res.json(studentNames);
    }
    catch (error) {
        console.error('Error getting student names:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.get('/students-sorted-by-grade', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, pgConfig_1.fetchStudents)();
        const sortedStudents = yield (0, service_1.sortStudentsByGrade)(students);
        res.json(sortedStudents);
    }
    catch (error) {
        console.error('Error sorting students by grade:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.get('/average-age', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, pgConfig_1.fetchStudents)();
        const averageAge = yield (0, service_1.getAverageAge)(students);
        res.json({ averageAge });
    }
    catch (error) {
        console.error('Error calculating average age:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Add a new POST endpoint to accept JSON data from Postman
app.post('/new-student', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assuming the request body contains JSON data for a new student
        const newStudent = req.body;
        // Here you can perform any operations with the new student data, such as adding it to the database
        // For demonstration, let's just echo back the received data
        res.json(newStudent);
    }
    catch (error) {
        console.error('Error processing new student data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port`);
});
//# sourceMappingURL=app.js.map