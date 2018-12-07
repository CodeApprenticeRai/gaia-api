var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var outcomeDocumentSchema = new Schema({
  title: { type: String, required: true, unique: true},
  notes: { type: String },
  takeaway: { type: String, required: true  },
  // timeToCompletion: { type: Number, required: true }, // minutes
  associatedSequenceID: { type: Schema.Types.ObjectId, required: true, ref:'Sequence' },
  associatedUserID: { type: Schema.Types.ObjectId, required: true, ref:'User'}
});

var OutcomeDocument = mongoose.model('OutcomeDocument', outcomeSchema);

module.exports = OutcomeDocument;
