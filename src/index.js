import express from 'express';

import cors from 'cors';
import 'dotenv/config'
import connectDb from './config/db.js';
import healthRoutes from './routes/healthRoutes.js';

const app = express();

const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());
app.use(express.json());
app.use('/health', healthRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the User Service API',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});