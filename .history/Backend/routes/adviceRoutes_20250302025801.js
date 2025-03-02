const express = require('express');
const { postAdvice, getAdvice } = require('../controllers/adviceController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, postAdvice);
router.get('/', getAdvice);

module.exports = router;
