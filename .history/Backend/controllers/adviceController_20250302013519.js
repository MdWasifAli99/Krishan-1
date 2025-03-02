const Advice = require('../models/Advice');

// Post Advice
const postAdvice = async (req, res) => {
  const advice = await Advice.create({ ...req.body, author: req.user.id });
  res.status(201).json(advice);
};

// Get Advice
const getAdvice = async (req, res) => {
  const adviceList = await Advice.find().populate('author', 'name email');
  res.json(adviceList);
};

module.exports = { postAdvice, getAdvice };
