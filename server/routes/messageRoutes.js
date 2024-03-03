import express from 'express';
import sendMessage from '../controllers/message/sendMessage.js';
import protectRoute from '../middleware/protectRoute.js';
import { getMessage } from '../controllers/message/getMessage.js';

const router = express.Router();

router.use(protectRoute);
router.get('/:id', getMessage);
router.post('/send/:id', sendMessage);

export default router;
