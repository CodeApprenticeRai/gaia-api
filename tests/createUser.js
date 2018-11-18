const mongoose = require('mongoose');
const User = require('../models/user.js');
const config = require('../config.js');
const db_uri = config.gaia_db_uri;

mongoose.connect(db_uri);

const testUser = new User({
  username: 'test',
  email: 'test@test.com',
  password: 'helloworld',
  day_end: '72900',
  day_start: '18000',

}).save( (err, res) => {
  if (err){
    throw (err);
  }
  console.log(res);
});

User.find( { username: 'test' }, (err, res ) => {
  if (err){
    console.log(err);
  }
  console.log( res );
});
