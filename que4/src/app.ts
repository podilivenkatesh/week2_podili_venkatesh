// app.ts
import express, { Request, Response } from 'express';
import { fetchStudents } from './pgConfig';
import { filterPassedStudents, getStudentNames, sortStudentsByGrade, getAverageAge } from './service';

const app = express();

app.use(express.json());

app.get('/passed-students', async (req: Request, res: Response) => {
    try {
        const students = await fetchStudents();
        const passedStudents = await filterPassedStudents(students);
        res.json(passedStudents);
        console.log("passed students");
    } catch (error) {
        console.error('Error filtering passed students:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/student-names', async (req: Request, res: Response) => {
    try {
        const students = await fetchStudents();
        const studentNames = await getStudentNames(students);
        res.json(studentNames);
    } catch (error) {
        console.error('Error getting student names:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/students-sorted-by-grade', async (req: Request, res: Response) => {
    try {
        const students = await fetchStudents();
        const sortedStudents = await sortStudentsByGrade(students);
        res.json(sortedStudents);
    } catch (error) {
        console.error('Error sorting students by grade:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/average-age', async (req: Request, res: Response) => {
    try {
        const students = await fetchStudents();
        const averageAge = await getAverageAge(students);
        res.json({ averageAge });
    } catch (error) {
        console.error('Error calculating average age:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add a new POST endpoint to accept JSON data from Postman
app.post('/new-student', async (req: Request, res: Response) => {
    try {
        // Assuming the request body contains JSON data for a new student
        const newStudent = req.body;
        // Here you can perform any operations with the new student data, such as adding it to the database
        res.json(newStudent);
    } catch (error) {
        console.error('Error processing new student data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log(`Server is running on port`);
});
