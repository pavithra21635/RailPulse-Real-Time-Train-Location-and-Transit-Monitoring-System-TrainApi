const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

async function loginUser(req, res) {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

  


    // Generate JWT token
    const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

    // Return token
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { loginUser };
