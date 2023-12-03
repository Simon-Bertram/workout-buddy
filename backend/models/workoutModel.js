import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: [true, 'Title is required.'],
  },
  description: String,
  reps: {
    type: Number,
    required: [true, 'Reps is required.'],
  },
  weight: {
    type: Number,
    required: [true, 'Weight is required.'],
  },
}, { timestamps: true });

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;