"use strict";

var mongoose = require('mongoose');

var notificationchema = new mongoose.Schema({
  status: {
    type: String
  },
  notif_token: {
    type: String,
    required: false
  },
  txnid: {
    type: String,
    required: false
  }
}, {
  collection: 'notifications',
  timestamps: true
});
module.exports = mongoose.model('Notification', notificationchema);