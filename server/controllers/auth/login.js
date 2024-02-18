import User from '../../models/userModel.js';
import bcryptjs from 'bcryptjs';
import generateRefreshToken from '../../utils/generateRefreshToken.js';
import generateAccessToken from '../../utils/generateAccessToken.js';
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user)
      return res
        .status(404)
        .json({ error: 'User is not exist!' });

    const isCorrectPassword = await bcryptjs.compare(
      password,
      user?.password
    );
    if (!isCorrectPassword)
      return res
        .status(400)
        .json({ error: 'Unauthorzation' });
    generateAccessToken(user, res);
    generateRefreshToken(user, res);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      avatar: user.avatar,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default login;
