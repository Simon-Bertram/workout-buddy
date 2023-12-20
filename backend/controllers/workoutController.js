import Workout from "../models/workoutModel.js";
import mongoose from "mongoose";

// Get all the workout documents
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;

  try {
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single workout document
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Workout not found!' });
  }

  try {
    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found!' });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Create a new workout document
const createWorkout = async (req, res) => {
  const { title, reps, weight } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push('title');
  if (!reps) emptyFields.push('reps');
  if (!weight) emptyFields.push('weight');

  if (emptyFields.length > 0) {
    return res.status(400).json({ error: `Please fill in all the fields`, emptyFields });
  }
  
  // Add doc to MongoDB
  try {
    const user_id = req.user._id;
    const workout = await Workout.create({ title, reps, weight, user_id });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a single workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Workout not found!' });
  }

  const workout = await Workout.findByIdAndDelete({ _id: id });
  
  if (!workout) {
    return res.status(404).json({ message: 'Workout not found!' });
  }

  res.status(200).json({ workout, message: 'Workout deleted successfully.' });
};

// Update a single workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: 'Workout not found!' });
  }

  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body }, { new: true });
  // workout.save();

  if (!workout) {
    return res.status(404).json({ message: 'Workout not found!' });
  }

  res.status(200).json({ workout, message: 'Workout updated successfully.'});
};

export { 
  createWorkout,
  getWorkouts, 
  getWorkout,
  deleteWorkout,
  updateWorkout,
};