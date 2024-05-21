"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
let numbers = [];
// Endpoint to receive an array of numbers from Postman
app.post('/numbers', (req, res) => {
    numbers = req.body;
    res.send("Numbers received successfully");
});
// Map route
app.get('/map', (req, res) => {
    const doubledNumbers = numbers.map(num => num * 2);
    res.json(doubledNumbers);
});
// Filter route
app.get('/filter', (req, res) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    res.json(evenNumbers);
});
// Reduce route
app.get('/reduce', (req, res) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
});
// forEach route
app.get('/forEach', (req, res) => {
    numbers.forEach(num => console.log(num));
    res.send("Check console for output");
});
// Some route
app.get('/some', (req, res) => {
    const hasEvenNumber = numbers.some(num => num % 2 === 0);
    res.json({ hasEvenNumber });
});
// Every route
app.get('/every', (req, res) => {
    const allNumbersGreaterThanZero = numbers.every(num => num > 0);
    res.json({ allNumbersGreaterThanZero });
});
// Find route
app.get('/find', (req, res) => {
    const firstEvenNumber = numbers.find(num => num % 2 === 0);
    res.json({ firstEvenNumber });
});
// FindIndex route
app.get('/findIndex', (req, res) => {
    const firstIndexOfEvenNumber = numbers.findIndex(num => num % 2 === 0);
    res.json({ firstIndexOfEvenNumber });
});
// Sort route
app.get('/sort', (req, res) => {
    numbers.sort((a, b) => a - b);
    res.json(numbers);
});
// Slice route
app.get('/slice/:start/:end', (req, res) => {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    const slicedArray = numbers.slice(start, end);
    res.json(slicedArray);
});
// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
//# sourceMappingURL=app.js.map