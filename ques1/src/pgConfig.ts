import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres1',
  password: 'Venky@15',
  port: 5432,
});
// 

export default pool;
