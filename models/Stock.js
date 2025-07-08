const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  ips: [String] // store hashed or raw IPs (for FCC we'll start raw)
});

module.exports = mongoose.model('Stock', stockSchema);
