"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchStudents = void 0;
// pgconfig.ts
const pg_1 = require("pg");
// Set up the PostgreSQL connection pool
const pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgresql2',
    password: 'Venky@15',
    port: 5432,
});
// Function to fetch student data from PostgreSQL
function fetchStudents() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryResult = yield pool.query('SELECT * FROM students');
            return queryResult.rows;
        }
        catch (error) {
            throw new Error(`Error fetching students: ${error}`);
        }
    });
}
exports.fetchStudents = fetchStudents;
//# sourceMappingURL=pgConfig.js.map