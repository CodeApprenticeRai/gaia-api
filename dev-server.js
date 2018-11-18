const express = require('express');
const mongoose = require('mongoose');
const config = require('./config.js');

//require all models
var models_path = __dirname + '/models';

fs.readdirSync(models_path).forEach( (file) => {
  require( models_path+ '/' + file);
})


mongoose.connect(config.gaia_db_uri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log("********\n"  + "Connection Successful\n" + "********\n" );
});
