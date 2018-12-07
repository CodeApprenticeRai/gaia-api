const mongoose = require('mongoose');
const Sequence = require('../models/sequence.js');
const User = require('../models/user.js');
const config = require('../config.js');
const db_uri = config.gaia_db_uri;

mongoose.connect(db_uri);

// create a sequence with associatedUserID
// Query to make sure it was created


// User.findOne( { username: 'test' }, (err, userRes) => {
//   // console.log( userRes._id );
//   const firstSequence = new Sequence({
//   title: 'gaia',
//   notes: '',
//   associatedUserID: userRes._id
//   }).save(
//     (err, res) => {
//       console.log(res);
//     }
//   );
// });

User.findOne({ title: 'gaia'}, (err1, res1) => {
  User.findOne( res1.associatedUserID, ( err2, res2) => {
    console.log( res2);
  });
});
