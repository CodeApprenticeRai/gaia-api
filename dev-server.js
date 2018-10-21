const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');

const User = require('./models/user.js')

mongoose.connect(config.gaia_db_uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));


db.once('open', () => {
  console.log("********\n"  + "Connection Successful\n" + "********\n" );
});

// --------------
// Create a new user from valided user object
function createNewUser( UserObject){
  var newUser = new User({
    username: UserObject.username,
    day_end: UserObject.day_end,
    'day_start': UserObject.day_start
  })

  newUser.save( (err, newUser) => {
    if (err) return console.error(err)
    else {
      console.log('New user: *** ' + newUser.username + " *** successfully created");
    };
  });
  return;
};

// get userId from username
function getUserId( username ){
  User.find({ username: username }, (err, results) => {
    if (results[0]){
      console.log( results[0]);
      return results[0];
    }
    else{
      console.log( " *** Nothing seem to have been found ***" );
    }
  });
}
