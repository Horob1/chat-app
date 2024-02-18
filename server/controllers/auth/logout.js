const logout = async (req, res) => {
  try {
    res.cookie('refreshToken', '', {
      maxAge: 0,
    });
    res.cookie('accessToken', '', {
      maxAge: 0,
    });
    res
      .status(200)
      .json({ message: 'Log out successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export default logout;
