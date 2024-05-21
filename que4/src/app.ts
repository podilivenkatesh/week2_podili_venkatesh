import express, { Application, Request, Response } from 'express';
import { createStudent, getStudentNames, filterPassedStudents, sortStudentsByGrade, getAverageAge } from './service';

const app: Application = express();
app.use(express.json());

// Endpoint to create a new student
app.post('/students', async (req: Request, res: Response) => { 
 const { name, age, grade } = req.body; 
 try {
   await createStudent(name, age, grade); 
   res.send("Student created successfully");
 } catch (err) {
   res.status(500).send("Error creating student");
 }
});

// Endpoint to get all student names
app.get('/students/names', async (req: Request, res: Response) => { 
 try {
   const names = await getStudentNames(); 
   res.json(names);
 } catch (err) {
   res.status(500).send("Error fetching student names");
 }
});

// Endpoint to get students with grades >= 50
app.get('/students/passed', async (req: Request, res: Response) => { 
 try {
   const students = await filterPassedStudents(); 
   res.json(students);
 } catch (err) {
   res.status(500).send("Error fetching passed students");
 }
});

// Endpoint to get students sorted by grade
app.get('/students/sorted', async (req: Request, res: Response) => { 
 try {
   const students = await sortStudentsByGrade(); 
   res.json(students);
 } catch (err) {
   res.status(500).send("Error fetching sorted students");
 }
});

// Endpoint to get the average age of students
app.get('/students/average-age', async (req: Request, res: Response) => { 
 try {
   const averageAge = await getAverageAge(); 
   res.json({ average_age: averageAge });
 } catch (err) {
   res.status(500).send("Error fetching average age");
 }
});

// Start the server
app.listen(3000, () => { 
 console.log(`Server is running on port 3000`); 
});
