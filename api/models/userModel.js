'use strict';
var mongoose = require('mongoose');
var uuid = require('uuid')
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    id: {
        type: String,
        unique: true,
        default:uuid()
      },
      name: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
      Created_date: {
        type: Date,
        default: Date.now
      },
      city: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      }
      
});

module.exports = mongoose.model('User', UserSchema);