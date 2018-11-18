var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  day_end: { type: Number, required: true },
  day_start: { type: Number, required: true },
})

var User = mongoose.model('User', userSchema);

module.exports = User;
