const express = require("express");
const { postAdvice, getAdvice } = require("../controllers/adviceController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Get all advice (public route)
router.get("/", getAdvice);

// Post new advice (protected route)
router.post("/", protect, postAdvice);

module.exports = router;
