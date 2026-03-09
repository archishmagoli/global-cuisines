import { pool } from "./database.js";
import './dotenv.js';
import cuisineData from "../data/cuisines.js";

const createTableQuery = `
    DROP TABLE IF EXISTS cuisines;

    CREATE TABLE IF NOT EXISTS cuisines (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        signatureDish TEXT NOT NULL,
        flavorProfile TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL
    )
`

const createCuisinesTable = async () => {
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 cuisines table created successfully');
    } catch (error) {
        console.error('⚠️ error creating cuisines table', error)
    }
}

const seedCuisineTable = async () => {
    await createCuisinesTable();
    cuisineData.forEach((cuisine) => {
        const insertQuery = {
            text: 'INSERT INTO cuisines (name, image, description, signatureDish, flavorProfile, submittedBy) VALUES ($1, $2, $3, $4, $5, $6)'
        }

        const values = [
            cuisine.name,
            cuisine.image,
            cuisine.description,
            cuisine.signatureDish,
            cuisine.flavorProfile,
            cuisine.submittedBy
        ]

        pool.query(insertQuery, values, (error, response) => {
            if (error) {
                console.error('⚠️ error inserting cuisine', error);
                return;
            }

            console.log(`✅ ${cuisine.name} cuisine added successfully`)
        })
    })
}

await seedCuisineTable();