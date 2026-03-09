import { pool } from '../config/database.js';

const selectTableQuery = `
    SELECT * FROM cuisines;
`;

const getCuisines = async (req, res) => {
    try {
        const results = await pool.query(selectTableQuery);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(409).json( { error: error.message } );
    }
}

export default {
    getCuisines
};