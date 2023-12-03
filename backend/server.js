import 'dotenv/config'
import express from 'express';
import workoutRoutes from './routes/routes.js';

const app = express();  
const PORT = 3000;

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {  
  res.send('Hello World!');
});

app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}.`);
});