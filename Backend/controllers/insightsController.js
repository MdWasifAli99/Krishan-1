const Insight = require('../models/Insight');

// Get Insights
const getInsights = async (req, res) => {
  const insights = await Insight.find();
  res.json(insights);
};

module.exports = { getInsights };
