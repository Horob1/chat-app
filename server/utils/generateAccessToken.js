import jwt from 'jsonwebtoken';

const generateAccessToken = (user, res) => {
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
    },
    process.env.SECRET_ACCESS_TOKEN,
    {
      expiresIn: '5D',
    }
  );

  res.cookie('accessToken', token, {
    maxAge: 5 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'strict',
  });
};

export default generateAccessToken;
