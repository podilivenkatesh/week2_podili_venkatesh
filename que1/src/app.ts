import express from 'express';
import bodyParser from 'body-parser';
import pool from './pgConfig';
import { filterOrders } from './service';

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Post endpoint for b. we are getting orderid coloum from items were lineno divisible by 3 
app.post('/orders', async (req, res) => {
    const { items } = req.body;
  
    if (!items) {
      return res.status(400).json({ error: 'No items provided' });
    }
  
    try {
      const filteredOrders = filterOrders(items);
      for (const order of filteredOrders) {
        await pool.query('INSERT INTO orders (orderID) VALUES ($1)', [order.orderID]);
      }
      res.status(200).json({ message: 'Orders processed successfully' });
    } catch (error) {
      console.error('Error processing orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
