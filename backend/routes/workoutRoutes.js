import express from 'express';
import { 
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} from '../controllers/workoutController.js';
import requireAuth from '../middleware/requireAuth.js';

const router = express.Router();

// Require the user to be logged in for all routes
router.use(requireAuth);

// Get all the workout documents
// GET /
router.get('/', getWorkouts);

// Create a new workout document
// POST /workouts
router.post('/', createWorkout);

// Get a single workout document
// GET /workouts/:id
router.get('/:id', getWorkout);

// Delete a single workout
// DELETE /workouts/:id
router.delete('/:id', deleteWorkout);

// Update a single workout
// PATCH /workouts/:id
router.patch('/:id', updateWorkout);

export default router;