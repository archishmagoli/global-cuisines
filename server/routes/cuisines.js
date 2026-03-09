import express from 'express';
import CuisineController from '../controllers/cuisines.js';

const router = express.Router();
router.get('/', CuisineController.getCuisines);

router.get('/:cuisineId', (req, res) => {
  const cuisine = cuisineData.find(c => c.id === parseInt(req.params.cuisineId))
  if (!cuisine) {
    return res.status(404).json({ error: 'Cuisine not found' })
  }
  res.status(200).json(cuisine)
});

router.get('*path', (req, res) => {
  return res.status(404).json({ error: 'Page not found!' })
});



export default router;