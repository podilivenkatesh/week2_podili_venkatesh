// pgconfig.ts
import { Pool, QueryResult } from 'pg';

// Set up the PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgresql2',
    password: 'Venky@15',
    port: 5432,
});

// Define the structure of a student object
export interface Student {
    name: string;
    age: number;
    grade: number;
}

// Function to fetch student data from PostgreSQL
export async function fetchStudents(): Promise<Student[]> {
    try {
        const queryResult: QueryResult = await pool.query('SELECT * FROM students');
        return queryResult.rows;
    } catch (error) {
        throw new Error(`Error fetching students: ${error}`);
    }
}
