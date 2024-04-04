const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
var chauffeureSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: false
      },
      prenom: {
        type: String,
        required: false
      },
      telephone: {
        type: String,
        required: false
      },
    ville: {
      type: String,
      required: false
    },
    commune: {
        type: String,
        required: false
      },
    
  }, {
    collection: 'chauffeures',
    timestamps: true
  });

  module.exports = mongoose.model('Chauffeure', chauffeureSchema);