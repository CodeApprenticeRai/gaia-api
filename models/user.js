var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  day_end: { type: Number, required: false },
  day_start: { type: Number, required: false }

})

var User = mongoose.model('User', userSchema);

module.exports = User; 
