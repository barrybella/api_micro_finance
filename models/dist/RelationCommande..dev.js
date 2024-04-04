"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var relationCommandeSchema = new mongoose.Schema({
  client_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  commande_id: {
    type: Schema.Types.ObjectId,
    ref: 'Commande'
  },
  date: {
    type: Date,
    "default": Date.now
  },
  status: {
    type: Number,
    "default": 0
  },
  "delete": {
    type: Number,
    "default": 0
  }
}, {
  collection: 'relationCommandes',
  timestamps: true
});
module.exports = mongoose.model('RelationCommande', relationCommandeSchema);