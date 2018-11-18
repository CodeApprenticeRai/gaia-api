var mongosoe = require('mongoose');
var Schema = mongoose.Schema;


var sequenceSchema = new Schema({
  title: { type: String, required: true }.
  notes: { type: String, },
  associatedUserID: { type: Schema.Types.ObjectId, required: true, ref:'User'}
});

var Sequence = mongoose.model('Sequence', sequenceSchema);

module.exports = Sequence;
