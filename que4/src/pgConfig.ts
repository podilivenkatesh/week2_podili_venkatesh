import { Pool, QueryResult } from 'pg';

// Set up the PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres1',
    password: 'Venky@15',
    port: 5432,
});

export default pool;
