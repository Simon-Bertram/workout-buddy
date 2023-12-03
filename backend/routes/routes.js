import express from 'express';

const router = express.Router();

// Get all the workout documents
// GET /
router.get('/', (req, res) => {  
  res.json({message: 'TODO Get all workouts'});
});

// Create a new workout document
// POST /workouts
router.post('/', (req, res) => {  
  res.send('TODO Create a new workout');
});

// Get a single workout document
// GET /workouts/:id
router.get('/:id', (req, res) => {  
  res.json({message: 'TODO Get a single workout'});
});

// Delete a single workout
// DELETE /workouts/:id
router.delete('/:id', (req, res) => {  
  const { id } = req.params;
  res.json({message: 'TODO Delete a single workout with id ' + id});
});

// Update a single workout
// PATCH /workouts/:id
router.patch('/:id', (req, res) => {  
  const { id } = req.params;
  res.json({message: 'TODO Update a single workout with id ' + id});
});

export default router;