import pool from './pgConfig'; 

// Create student details
async function createStudent(name: string, age: number, grade: number): Promise<any> { 
 try { 
 const query = 'INSERT INTO students (name, age, grade) VALUES ($1, $2, $3)'; 
 const result = await pool.query(query, [name, age, grade]);
 return result; 
 } catch(err) { 
 return err; 
 } 
} 

// Get all student names
async function getStudentNames(): Promise<any[]> { 
 const query = 'SELECT name FROM students'; 
 const result = await pool.query(query); 
 return result.rows; 
} 

// Filter students whose grade is greater than or equal to 50
async function filterPassedStudents(): Promise<any> { 
 const query = 'SELECT * FROM students WHERE grade >= 50';
 const result = await pool.query(query); 
 return result.rows; 
} 

// Sort students by grade in ascending order
async function sortStudentsByGrade(): Promise<any> { 
 const query = 'SELECT * FROM students ORDER BY grade ASC'; 
 const result = await pool.query(query); 
 return result.rows; 
} 

// Get the average age of students
async function getAverageAge(): Promise<any> { 
 const query = 'SELECT AVG(age) AS average_age FROM students'; 
 const result = await pool.query(query); 
 return result.rows[0].average_age; 
} 

export { createStudent, getStudentNames, filterPassedStudents, sortStudentsByGrade, getAverageAge };
