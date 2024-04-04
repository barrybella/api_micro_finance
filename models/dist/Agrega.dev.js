"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var agregaSchema = new mongoose.Schema({
  marque: {
    type: String,
    required: true
  },
  pays: {
    type: String,
    "default": '0'
  },
  type: {
    type: String,
    required: false
  },
  prix: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  "delete": {
    type: Number,
    "default": 0
  },
  distributeur_id: {
    type: Schema.Types.ObjectId,
    ref: 'Distributeur'
  }
}, {
  collection: 'agregas',
  timestamps: true
});
module.exports = mongoose.model('Agrega', agregaSchema);