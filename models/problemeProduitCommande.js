const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var problemeCommandeSchema = new mongoose.Schema({
 
  produit_panier_Id: { type: Schema.Types.ObjectId, ref: 'Commande.panier' },
  problemeId: { type: Schema.Types.ObjectId, ref: 'Probleme' },
  observations: {
          type: String,
          required: false,
       },       
  },
    
    {
    collection: 'problemecommandes',
    timestamps: true
  });

module.exports = mongoose.model('problemeCommande', problemeCommandeSchema);
