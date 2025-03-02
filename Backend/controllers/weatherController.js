const Weather = require('../models/Weather');

// Get Weather Data
const getWeather = async (req, res) => {
  const weatherData = await Weather.findOne({ location: req.params.location });
  if (weatherData) {
    res.json(weatherData);
  } else {
    res.status(404).json({ message: 'Weather data not found' });
  }
};

module.exports = { getWeather };
