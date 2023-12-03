import express from 'express';

const router = express.Router();

// Get all the workout documents
// GET workouts
router.get('/workouts', (req, res) => {  
  res.send('Get all workouts');
});

// Create a new workout document
// POST /workouts

// Get a single workout document
// GET /workouts/:id

// Delete a single workout
// DELETE /workouts/:id

// Update a single workout
// PATCH /workouts/:id

export default router;