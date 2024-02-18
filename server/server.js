import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './db/connectToDB.js';
import authRoutes from './routes/authRoutes.js';
import morgan from 'morgan';

dotenv.config({ path: './config.env' });
const app = express();
if (process.env.NODE === 'DEVELOPMENT')
  app.use(morgan('combined'));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);

app.listen(port, (req, res) => {
  connectToDB();
  console.log('Server running on port ' + port);
});
