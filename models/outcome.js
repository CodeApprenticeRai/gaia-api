var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var outcomeSchema = new Schema({
  title: { type: String, required: true, unique: true},
  notes: { type: String },
  parentID: { type: Schema.Types.ObjectId, required: true, ref:'Sequence' },
  timeToCompletion: { type: Number, required: true }, // minutes
  associatedUserID: { type: Schema.Types.ObjectId, required: true, ref:'User'}
});

var Outcome = mongoose.model('Outcome', outcomeSchema);

module.exports = Outcome;
