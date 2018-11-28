'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var UserSchema = new Schema({
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
        type: String,
        required: true,
      }
      
});

module.exports = mongoose.model('User', UserSchema);