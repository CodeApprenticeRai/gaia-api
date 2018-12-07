var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sequenceSchema = new Schema({
  title: { type: String, required: true, unique: true },
  finalStatePrompt: { type: String },
  associatedUserID: { type: Schema.Types.ObjectId, required: true, ref:'User'},
  completed: { type: Boolean, required: true }
});






var Sequence = mongoose.model('Sequence', sequenceSchema);

module.exports = Sequence;
