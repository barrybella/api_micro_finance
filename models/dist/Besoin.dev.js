"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var besoinSchema = new mongoose.Schema({
  engin: {
    type: String,
    required: false
  },
  nombre: {
    type: String
  },
  article: String,
  qtTransport: {
    type: String
  },
  distance: {
    type: String,
    "default": 0
  },
  typeContrat: {
    type: String
  },
  dureeContrat: String,
  categorie: {
    type: String,
    require: true
  },
  vehicule: String,
  nbPlace: String,
  depart: String,
  ariver: String,
  activite: String,
  qtVehicule: String,
  horaire: String,
  etat: String,
  prix: String,
  zoneOperation: String,
  detail: String,
  status: {
    type: Number,
    "default": 0
  },
  "delete": {
    type: Number,
    "default": 0
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  collection: 'besoins',
  timestamps: true
});
module.exports = mongoose.model('Besoin', besoinSchema);