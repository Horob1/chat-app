import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import getConversation from '../controllers/conversation/getConversation.js';

const router = express.Router();

router.use(protectRoute);
router.get('/', getConversation);

export default router;
