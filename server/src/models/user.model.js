const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  name_user: String,
  date_user: String,
  date_graphic: String,
  bpm: Number,
  blood_pressure: {
    first: Number,
    second: Number,
  }
},{
  timestamps: true
});

const users = mongoose.model('usuarios', DataSchema);
module.exports = users;