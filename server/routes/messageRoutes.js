import express from 'express';
import sendMessage from '../controllers/message/sendMessage.js';

const router = express.Router();

router.post('/send/:conversationId', sendMessage);

export default router;
