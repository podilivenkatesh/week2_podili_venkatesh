"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Set up the PostgreSQL connection pool
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres1',
    password: 'Venky@15',
    port: 5432,
});
exports.default = pool;
//# sourceMappingURL=pgConfig.js.map