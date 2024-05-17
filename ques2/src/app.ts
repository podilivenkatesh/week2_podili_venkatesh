// app.ts
import express, { Request, Response } from 'express';
import { fetchArrayFromDatabase } from './pgConfig';
import { 
    getArrayLength, 
    removeLastElement, 
    addElementToEnd, 
    deleteElementAtIndex, 
    removeElementsInRange, 
    getSubsetOfArray 
} from './service';

const app = express();
const PORT = 3001;

app.use(express.json());

// Route to handle incoming request to perform array operations
app.post('/array-operations', async (req: Request, res: Response) => {
    try {
        // Assume the request body contains the array and operation details
        const { array, operation, payload } = req.body;

        // Fetch array from database
        const fetchedArray = await fetchArrayFromDatabase();

        let result;
        switch (operation) {
            case 'length':
                result = await getArrayLength(fetchedArray);
                break;
            case 'removeLast':
                result = await removeLastElement(fetchedArray);
                break;
            case 'addElement':
                result = await addElementToEnd(fetchedArray, payload);
                break;
            case 'deleteElement':
                result = await deleteElementAtIndex(fetchedArray, payload);
                break;
            case 'removeRange':
                result = await removeElementsInRange(fetchedArray, payload.start, payload.end);
                break;
            case 'getSubset':
                result = await getSubsetOfArray(fetchedArray, payload.start, payload.end);
                break;
            default:
                throw new Error('Invalid operation');
        }

        res.json(result);
    } catch (error) {
        console.error('Error processing array operation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
