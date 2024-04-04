const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var partenaireSchema = new mongoose.Schema({
    
     nom: {
            type: String,
            required: false,
            default: '0'
         },
    
    image: {
            type: String,
            required: false,
            default: '0'
          },
          delete: {
            type: Number,
            default: 0
        },
    },
    
    {
    collection: 'partenaires',
    timestamps: true
  });

module.exports = mongoose.model('Partenaire', partenaireSchema);
