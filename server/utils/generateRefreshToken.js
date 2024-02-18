import jwt from 'jsonwebtoken';

const generateRefreshToken = (user, res) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.SECRET_REFRESH_TOKEN,
    {
      expiresIn: '360D',
    }
  );

  res.cookie('refreshToken', token, {
    maxAge: 360 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
  });
};

export default generateRefreshToken;
