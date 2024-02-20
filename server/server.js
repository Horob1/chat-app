import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './db/connectToDB.js';
import authRoutes from './routes/authRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

dotenv.config({ path: './config.env' });
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);

app.listen(port, (req, res) => {
  connectToDB();
  console.log('Server running on port ' + port);
});
