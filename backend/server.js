import 'dotenv/config'
dotenv.config({ path: '.env' })
import express from 'express';
import workoutRoutes from './routes/routes.js';

const app = express();  
const PORT = 3000;

app.use(express.json());
app.use('/', workoutRoutes);

app.get('/', (req, res) => {  
  res.send('Hello World!');
});

app.listen(PORT, () => {  
  console.log(`Server listening on port ${PORT}.`);
});