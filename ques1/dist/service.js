"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterOrders = void 0;
const filterOrders = (orders) => {
    return orders.filter(order => !order.OrderBlocks.some(orderBlock => orderBlock.LineNo % 3 === 0));
};
exports.filterOrders = filterOrders;
