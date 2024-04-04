const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var statutSchema = new mongoose.Schema({

    
     libelle: {
            type: String,
            required: true,
         },

         ordre: {
            type: Number,
            required: true,
         },       
         observations: {
          type: String,
          required: false,
         },
       
    },

    {
    collection: 'statuts',
    timestamps: true
  });

module.exports = mongoose.model('Statut', statutSchema);
