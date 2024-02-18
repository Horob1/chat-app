import User from '../../models/userModel.js';
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      passwordConfirm,
      gender,
    } = req.body;
    if (password !== passwordConfirm)
      return res
        .status(400)
        .json({ error: "Passwords don't match!" });
    if (await User.findOne({ username: username }))
      return res
        .status(400)
        .json({ error: 'Username already exists!' });
    if (await User.findOne({ email: email }))
      return res
        .status(400)
        .json({ error: 'Email already exists!' });
    const avatar =
      gender === 'Male'
        ? 'https://avatar.iran.liara.run/public/boy'
        : 'https://avatar.iran.liara.run/public/girl';

    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(
      password,
      salt
    );
    const user = new User({
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      gender,
      avatar,
    });
    if (user) {
      await user.save();
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
      });
    } else res.status(400).json({ error: 'Invalid data' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
