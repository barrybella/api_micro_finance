const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var camionSchema = new mongoose.Schema({
    
     immatriculation: {
            type: String,
            required: false,
            default: '0'
         },
    type: {
          type: String,
          required: false,
          default: '0'
       },
    nom: {
            type: String,
            required: false,
            default: '0'
          },
          delete: {
            type: Number,
            default: 0
        },
        chauffeur_id: { type: Schema.Types.ObjectId, ref: 'User' }

    },
    
    {
    collection: 'bloges',
    timestamps: true
  });

module.exports = mongoose.model('Camion', camionSchema);
