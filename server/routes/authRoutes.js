import express from 'express';
import signup from '../controllers/auth/signup.js';
import login from '../controllers/auth/login.js';
import logout from '../controllers/auth/logout.js';

const router = express.Router();

router.post('/log-in', login);
router.post('/sign-up', signup);
router.post('/log-out', logout);

export default router;
