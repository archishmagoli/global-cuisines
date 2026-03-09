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

const getCuisine = async (req, res) => {
    try {
        const { cuisineId } = req.params;
        const results = await pool.query('SELECT * FROM cuisines WHERE id = $1', [cuisineId]);
        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Cuisine not found' });
        }
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message });
    }
}

export default {
    getCuisines,
    getCuisine
};