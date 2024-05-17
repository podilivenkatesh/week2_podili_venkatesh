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
// app.ts
const express_1 = __importDefault(require("express"));
const pgConfig_1 = require("./pgConfig");
const service_1 = require("./service");
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
// Route to handle incoming request to perform array operations
app.post('/array-operations', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Assume the request body contains the array and operation details
        const { array, operation, payload } = req.body;
        // Fetch array from database
        const fetchedArray = yield (0, pgConfig_1.fetchArrayFromDatabase)();
        let result;
        switch (operation) {
            case 'length':
                result = yield (0, service_1.getArrayLength)(fetchedArray);
                break;
            case 'removeLast':
                result = yield (0, service_1.removeLastElement)(fetchedArray);
                break;
            case 'addElement':
                result = yield (0, service_1.addElementToEnd)(fetchedArray, payload);
                break;
            case 'deleteElement':
                result = yield (0, service_1.deleteElementAtIndex)(fetchedArray, payload);
                break;
            case 'removeRange':
                result = yield (0, service_1.removeElementsInRange)(fetchedArray, payload.start, payload.end);
                break;
            case 'getSubset':
                result = yield (0, service_1.getSubsetOfArray)(fetchedArray, payload.start, payload.end);
                break;
            default:
                throw new Error('Invalid operation');
        }
        res.json(result);
    }
    catch (error) {
        console.error('Error processing array operation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map