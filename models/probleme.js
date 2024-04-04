const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var problemeSchema = new mongoose.Schema({
 
  statutId: { type: Schema.Types.ObjectId, ref: 'Statut' },
  libelle: {
            type: String,
            required: true,
   },
  observations: {
          type: String,
          required: false,
       },       
  },
    
    {
    collection: 'problemes',
    timestamps: true
  });

module.exports = mongoose.model('Probleme', problemeSchema);
