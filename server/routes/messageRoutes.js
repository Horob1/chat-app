import express from 'express';
import sendMessage from '../controllers/message/sendMessage.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();
router.use(protectRoute);
router.post('/send', sendMessage);

export default router;
