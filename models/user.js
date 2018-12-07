var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  day_end: { type: Number, required: true }, // day end is a user preference where the number represents the number of seconds after 12am of the current day
  day_start: { type: Number, required: true }, // similar to day_end, day_start is a user preference where the number represents the number of seconds after 12am of the current day
  })

var User = mongoose.model('User', userSchema);

module.exports = User;
