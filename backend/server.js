import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workoutRoutes.js';
import userRoutes from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import morgan from 'morgan';

console.log(process.env.NODE_ENV);

const app = express();  
const PORT = 3000;

// Middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

// Connect to MongoDB
const uri = process.env.MONGO_URI;

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
