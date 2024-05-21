import express, { Application, Request, Response } from 'express';

const app: Application = express();
app.use(express.json());

let numbers: number[] = [];

// Endpoint to receive an array of numbers from Postman
app.post('/numbers', (req: Request, res: Response) => {
    numbers = req.body;
    res.send("Numbers received successfully");
});

// Map to double the numbers in array
app.get('/map', (req: Request, res: Response) => {
    const doubledNumbers = numbers.map(num => num * 2);
    res.json(doubledNumbers);
});

// Filter to retrieve even numbers
app.get('/filter', (req: Request, res: Response) => {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    res.json(evenNumbers);
});

// Reduce to get sum of the numbers in array
app.get('/reduce', (req: Request, res: Response) => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
});

// forEach 
app.get('/forEach', (req: Request, res: Response) => {
    numbers.forEach(num => console.log(num));
    res.send("Check console for output");
});

// Some has even numbers or not
app.get('/some', (req: Request, res: Response) => {
    const hasEvenNumber = numbers.some(num => num % 2 === 0);
    res.json({ hasEvenNumber });
});

// Every checks all numbers are grether than zero or not
app.get('/every', (req: Request, res: Response) => {
    const allNumbersGreaterThanZero = numbers.every(num => num > 0);
    res.json({ allNumbersGreaterThanZero });
});

// Find checks first evne number
app.get('/find', (req: Request, res: Response) => {
    const firstEvenNumber = numbers.find(num => num % 2 === 0);
    res.json({ firstEvenNumber });
});

// FindIndex retrieve firstindex of a even number
app.get('/findIndex', (req: Request, res: Response) => {
    const firstIndexOfEvenNumber = numbers.findIndex(num => num % 2 === 0);
    res.json({ firstIndexOfEvenNumber });
});

// Sort the array
app.get('/sort', (req: Request, res: Response) => {
    numbers.sort((a, b) => a - b);
    res.json(numbers);
});

// Slice 
app.get('/slice/:start/:end', (req: Request, res: Response) => {
    const start = parseInt(req.params.start);
    const end = parseInt(req.params.end);
    const slicedArray = numbers.slice(start, end);
    res.json(slicedArray);
});


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
