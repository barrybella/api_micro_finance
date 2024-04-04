const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var positionSchema = new mongoose.Schema({
 
  commande_id: { type: Schema.Types.ObjectId, ref: 'Commande' },
  transporte_id: { type: Schema.Types.ObjectId, ref: 'Transporte' },

  panier: {
    type: String,
    required: false
},
  quantite: {
            type: Number,
            default: 0
   },
   status: {
    type: Number,
    default: 0
},
   quantite_masquer: {
    type: Number,
    default: 0
},
   quantite_livrer: {
    type: Number,
    default: 0
},
   date: {
    type: String,
    required: false
},
heure: {
    type: String,
    required: false
}
     
  },
    
    {
    collection: 'postions',
    timestamps: true
  });

module.exports = mongoose.model('Position', positionSchema);
