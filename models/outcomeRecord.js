var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var outcomeRecordSchema = new Schema({
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  associatedOutcome: { type: Schema.Types.ObjectId, ref: 'Outcome', required: true },
  associatedSequence: { type: Schema.Types.ObjectId, ref: 'Seqeunce' , required: true},
  associatedUserID: { type: Schema.Types.ObjectId, required: true, ref:'User'}
});

var OutcomeRecord = mongoose.model('OutcomeRecord', outcomeRecordSchema);

module.exports = OutcomeRecord;
