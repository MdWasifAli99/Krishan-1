const Advice = require("../models/Advice");

// Post new advice
const postAdvice = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const newAdvice = await Advice.create({
      title,
      content,
      author: req.user.id, // Use the user from the middleware
    });
    res.status(201).json(newAdvice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create advice" });
  }
};

// Get all advice
const getAdvice = async (req, res) => {
  try {
    const adviceList = await Advice.find().populate("author", "name email");
    res.status(200).json(adviceList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch advice" });
  }
};

module.exports = { postAdvice, getAdvice };
