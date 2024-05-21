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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const pgConfig_1 = __importDefault(require("./pgConfig"));
const service_1 = require("./service");
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Post endpoint for b. we are getting orderid coloum from items were lineno divisible by 3 
app.post('/orders', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { items } = req.body;
    if (!items) {
        return res.status(400).json({ error: 'No items provided' });
    }
    try {
        const filteredOrders = (0, service_1.filterOrders)(items);
        for (const order of filteredOrders) {
            yield pgConfig_1.default.query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
        }
        res.status(200).json({ message: 'Orders processed successfully' });
    }
    catch (error) {
        console.error('Error processing orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}));
// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
