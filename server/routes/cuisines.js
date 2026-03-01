import express from 'express';
import cuisineData from '../data/cuisines.js';

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).json(cuisineData)
});

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