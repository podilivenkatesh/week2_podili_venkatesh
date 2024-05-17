// pgconfig.ts
import { Pool, QueryResult } from 'pg';

// Set up the PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres1',
    password: 'Venky@15',
    port: 5432,
});

// Function to fetch array from PostgreSQL database
export async function fetchArrayFromDatabase(): Promise<number[]> {
    try {
        const queryResult: QueryResult = await pool.query('SELECT * FROM arraytable');
        if (queryResult.rows.length === 0) {
            throw new Error('No data found in the database');
        }
        // Assuming arraytable has a single column containing the array
        const arrayData = queryResult.rows[0].arraynum;
        // Assuming arraynum is the name of the column containing the array
        return arrayData;
    } catch (error) {
        throw new Error(`Error fetching array from database: ${error}`);
    }
}
