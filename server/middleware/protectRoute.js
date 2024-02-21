import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken;
    if (!token)
      return res
        .status(401)
        .json({ error: 'Unauthorrized', type: 'No token' });
    const decoded = jwt.verify(
      token,
      process.env.SECRET_ACCESS_TOKEN
    );
    if (!decoded)
      return res.status(401).json({
        error: 'Unauthorrized',
        type: 'Invalid token',
      });
    const user = await User.findById(decoded.id);
    if (!user)
      return res
        .status(404)
        .json({ error: 'User not found' });
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default protectRoute;
