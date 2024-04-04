const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var produitSchema = new mongoose.Schema({
        marque: {
            type: String,
            required: true
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
        delete: {
            type: Number,
            default: 0
        },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
        }, 
    {
    collection: 'produits',
    timestamps: true
  });

module.exports = mongoose.model('Produit', produitSchema);