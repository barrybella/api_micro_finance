const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var statutCommandeSchema = new mongoose.Schema({
  produit_panier_Id: { type: Schema.Types.ObjectId, ref: 'Commande.panier' },
  statutId: { type: Schema.Types.ObjectId, ref: 'Statut'},
  position_id: { type: Schema.Types.ObjectId, ref: 'Position'},
  quantite: {
    type: Number,
    required: false,
  },
  dateRenseigne: {
    type: String,
    required: false,
  },
  heure: {
    type: String,
    required: false,
  },
  
  observations: {
    type: String,
    required: false,
  },
},
{
  collection: 'statutcommandes',
  timestamps: true
});

module.exports = mongoose.model('statutCommande', statutCommandeSchema);
