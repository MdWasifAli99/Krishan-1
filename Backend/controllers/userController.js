const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password, role, location } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ name, email, password: hashedPassword, role, location });
    res.status(201).json({ token: generateToken(newUser._id), user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({ token: generateToken(user._id), user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id).select('-password'); // Exclude password
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Logout User (Clear JWT Cookie)
const logoutUser = (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, expires: new Date(0) }); // Clear cookie
  res.json({ message: 'Logged out successfully' });
};


const updateUserProfile = (async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  if (req.body.currentPassword) {
    const isPasswordValid = await bcrypt.compare(req.body.currentPassword, user.password);
    if (!isPasswordValid) {
      res.status(401);
      throw new Error('Current password is incorrect');
    }

    // Hash the new password
    if (req.body.newPassword) {
      user.password = await bcrypt.hash(req.body.newPassword, 10);
    }
  }
  
  // Update user fields (only update fields that are provided in the request)
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  user.location = req.body.location || user.location;
  user.role = req.body.role || user.role;

  // Save updated user
  const updatedUser = await user.save();

  res.json({
    _id: updatedUser._id,
    name: updatedUser.name,
    email: updatedUser.email,
    role: updatedUser.role,
    location: updatedUser.location,
  });
});



module.exports = { registerUser, loginUser, getUserProfile, logoutUser , updateUserProfile};
