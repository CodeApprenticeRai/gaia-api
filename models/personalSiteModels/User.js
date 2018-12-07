const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
require('../config/passport');

const Schema = mongoose.Schema;




var userSchema = new Schema({
    email : {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  // username : {
  //   type: String,
  //   unique: true,
  //   required: true,
  //   trim: true
  // },

  hash : {
    type: String,
    required: true
  },

  salt: {
    type: String,
    required: true
  }

});


userSchema.methods.setPassword = function( password ){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

userSchema.methods.validatePassword = function( password ){
  const hash = crypto.pbkdf2Sync( password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJWT = function(){
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt( expirationDate.getTime() / 1000, 10),
  }, 'secret');
};

userSchema.methods.toAuthJSON = function(){
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };

};

var User = mongoose.model('User', userSchema);

module.exports = User;
