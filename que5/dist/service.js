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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntityToTable = exports.createTableIfNotExists = exports.checkTableExistence = void 0;
const pgConfig_1 = __importDefault(require("./pgConfig"));
// Function to check the existence of a table
function checkTableExistence(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const queryResult = yield pgConfig_1.default.query(`SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = $1);`, [tableName]);
            return queryResult.rows[0].exists;
        }
        catch (error) {
            console.error('Error checking table existence:', error);
            return false;
        }
    });
}
exports.checkTableExistence = checkTableExistence;
// Function to create the table if it doesn't exist
function createTableIfNotExists(tableName) {
    return __awaiter(this, void 0, void 0, function* () {
        const tableExists = yield checkTableExistence(tableName);
        if (!tableExists) {
            try {
                yield pgConfig_1.default.query(`
                CREATE TABLE ${tableName} (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255)
                );
            `);
                console.log(`Table "${tableName}" created successfully.`);
            }
            catch (error) {
                console.error('Error creating table:', error);
            }
        }
    });
}
exports.createTableIfNotExists = createTableIfNotExists;
// Function to add an entity to the table
function addEntityToTable(tableName, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield createTableIfNotExists(tableName);
            yield pgConfig_1.default.query(`INSERT INTO ${tableName} (name) VALUES ($1);`, [name]);
            console.log(`Entity "${name}" added to table "${tableName}" successfully.`);
        }
        catch (error) {
            console.error('Error adding entity:', error);
        }
    });
}
exports.addEntityToTable = addEntityToTable;
//# sourceMappingURL=service.js.map