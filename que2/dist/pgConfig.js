"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'postgres1',
    password: 'Venky@15',
    port: 5432,
};
const pool = new pg_1.Pool(pgConfig);
exports.default = pool;
//# sourceMappingURL=pgConfig.js.map