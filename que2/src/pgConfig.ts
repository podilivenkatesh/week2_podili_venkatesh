import { Pool } from 'pg';

const pgConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres1',
    password: 'Venky@15',
    port: 5432,
};

const pool = new Pool(pgConfig);

export default pool;
