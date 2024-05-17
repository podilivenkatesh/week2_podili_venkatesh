interface OrderBlock {
    LineNo: number;
  }
  
  interface Order {
    orderID: string;
    OrderBlocks: OrderBlock[];
    orderInvoiceNo: string;
  }
  
  export const filterOrders = (orders: Order[]): Order[] => {
    return orders.filter(order =>
      !order.OrderBlocks.some(orderBlock => orderBlock.LineNo % 3 === 0)
    );
  };
  