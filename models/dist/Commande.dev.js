"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var commandeSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: false
  },
  livraison: {
    type: String,
    required: false
  },
  valider: {
    type: Number,
    "default": 0
  },
  prenom: {
    type: String,
    required: false
  },
  telephone: {
    type: String,
    required: false
  },
  quantite: {
    type: Number,
    required: false
  },
  montantTotal: {
    type: Number,
    required: true
  },
  montantUnitaire: {
    type: Number,
    required: false
  },
  status: {
    type: Number,
    "default": 0
  },
  livrer: {
    type: Number,
    "default": 0
  },
  commission: {
    type: Number,
    "default": 0
  },
  status_livrer: {
    type: Number,
    "default": 0
  },
  date: {
    type: String,
    "default": 0
  },
  status_relation: {
    type: Number,
    "default": 0
  },
  "delete": {
    type: Number,
    "default": 0
  },
  zone_id: {
    type: Schema.Types.ObjectId,
    ref: 'Zone'
  },
  client_id: {
    type: Schema.Types.ObjectId,
    ref: 'Distributeur'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'Distributeur'
  },
  produit_id: {
    type: Schema.Types.ObjectId,
    ref: 'Agrega'
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: 'Produit'
  }
}, {
  collection: 'commandes',
  timestamps: true
});
module.exports = mongoose.model('Commande', commandeSchema);