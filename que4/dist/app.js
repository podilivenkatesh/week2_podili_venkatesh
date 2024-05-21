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
const express_1 = __importDefault(require("express"));
const service_1 = require("./service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Endpoint to create a new student
app.post('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, age, grade } = req.body;
    try {
        yield (0, service_1.createStudent)(name, age, grade);
        res.send("Student created successfully");
    }
    catch (err) {
        res.status(500).send("Error creating student");
    }
}));
// Endpoint to get all student names
app.get('/students/names', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const names = yield (0, service_1.getStudentNames)();
        res.json(names);
    }
    catch (err) {
        res.status(500).send("Error fetching student names");
    }
}));
// Endpoint to get students with grades >= 50
app.get('/students/passed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, service_1.filterPassedStudents)();
        res.json(students);
    }
    catch (err) {
        res.status(500).send("Error fetching passed students");
    }
}));
// Endpoint to get students sorted by grade
app.get('/students/sorted', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield (0, service_1.sortStudentsByGrade)();
        res.json(students);
    }
    catch (err) {
        res.status(500).send("Error fetching sorted students");
    }
}));
// Endpoint to get the average age of students
app.get('/students/average-age', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const averageAge = yield (0, service_1.getAverageAge)();
        res.json({ average_age: averageAge });
    }
    catch (err) {
        res.status(500).send("Error fetching average age");
    }
}));
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
//# sourceMappingURL=app.js.map