import express, { Application, Request, Response } from 'express';
import { addEntityToTable } from './service';

const app: Application = express();
app.use(express.json());

// Endpoint to add an entity to the table
app.post('/addEntity', async (req: Request, res: Response) => {
    const { name } = req.body;
    const tableName = 'newtable'; 
    try {
        await addEntityToTable(tableName, name);
        res.send(`Entity "${name}" added to table "${tableName}" successfully.`);
    } catch (error) {
        console.error('Error adding entity:', error);
        res.status(500).send('Error adding entity.');
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
