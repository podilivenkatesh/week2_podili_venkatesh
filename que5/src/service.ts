import pool from './pgConfig';

// Function to check the existence of a table
export async function checkTableExistence(tableName: string): Promise<boolean> {
    try {
        const queryResult = await pool.query(
            `SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = $1);`,
            [tableName]
        );
        return queryResult.rows[0].exists;
    } catch (error) {
        console.error('Error checking table existence:', error);
        return false;
    }
}

// Function to create the table if it doesn't exist
export async function createTableIfNotExists(tableName: string): Promise<void> {
    const tableExists = await checkTableExistence(tableName);
    if (!tableExists) {
        try {
            await pool.query(`
                CREATE TABLE ${tableName} (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255)
                );
            `);
            console.log(`Table "${tableName}" created successfully.`);
        } catch (error) {
            console.error('Error creating table:', error);
        }
    }
}

// Function to add an entity to the table
export async function addEntityToTable(tableName: string, name: string): Promise<void> {
    try {
        await createTableIfNotExists(tableName);
        await pool.query(`INSERT INTO ${tableName} (name) VALUES ($1);`, [name]);
        console.log(`Entity "${name}" added to table "${tableName}" successfully.`);
    } catch (error) {
        console.error('Error adding entity:', error);
    }
}
