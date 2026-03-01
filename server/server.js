import express from 'express';
import cuisineRouter from './routes/cuisines.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001

// All routes defined in cuisineRouter are prefixed with /cuisines
app.use('/cuisines', cuisineRouter);
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
