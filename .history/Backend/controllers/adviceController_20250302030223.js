const Advice = require('../models/Advice');

// Post Advice
const postAdvice = async (req, res) => {
  const { title, content } = req.body;

  // Ensure title and content are provided
  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    // Create new advice and attach the author (from the authenticated user)
    const advice = await Advice.create({
      title,
      content,
      author: req.user.id, // Assuming user is attached to req by the protect middleware
    });
    
    // Return the created advice
    res.status(201).json(advice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating advice" });
  }
};

// Get Advice
const getAdvice = async (req, res) => {
  try {
    // Get all advice and populate author information
    const adviceList = await Advice.find().populate('author', 'name email');

    // If no advice found
    if (!adviceList.length) {
      return res.status(404).json({ message: "No advice found" });
    }

    res.status(200).json(adviceList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving advice" });
  }
};

module.exports = { postAdvice, getAdvice };
