import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/routes.js';

console.log(process.env.NODE_ENV);

const app = express();  
const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to MongoDB
const uri = process.env.MONGO_URI;
console.log(uri);

mongoose.connect(uri)
  .then(() => {
    app.listen(PORT, () => {  
      console.log('Connected to MongoDB & listening on port ' + process.env.PORT || 3000);
    });
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB.', err);
  });

app.get('/', (req, res) => {  
  res.send('Hello World!');
});
