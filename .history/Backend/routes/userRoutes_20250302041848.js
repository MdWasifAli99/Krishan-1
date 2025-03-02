const express = require('express');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // Protect middleware to secure routes

const router = express.Router();

// Route for registering a user
router.post('/register', registerUser);

// Route for logging in a user
router.post('/login', loginUser);

// Route for logging out a user (clears JWT cookie)
router.post('/logout', logoutUser);

// Route for getting the user profile (protected route)
router.get('/profile', protect, getUserProfile);

module.exports = router;
