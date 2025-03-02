const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  location: String,
  temperature: Number,
  humidity: Number,
  forecast: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);