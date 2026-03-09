import express from 'express';
import CuisineController from '../controllers/cuisines.js';

const router = express.Router();

router.get('/', CuisineController.getCuisines);
router.get('/:cuisineId', CuisineController.getCuisine);

router.get('*path', (req, res) => {
  return res.status(404).json({ error: 'Page not found!' })
});



export default router;