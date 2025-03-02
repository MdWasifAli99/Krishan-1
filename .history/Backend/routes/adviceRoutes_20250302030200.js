const express = require("express");
const { protect } = require("../middlewares/authMiddleware"); // Protect middleware
const { postAdvice, getAdvice } = require("../controllers/adviceController");

const router = express.Router();

// Public route: Get all advice
router.get("/", getAdvice);

// Protected route: Post new advice
router.post("/", protect, postAdvice);

module.exports = router;
