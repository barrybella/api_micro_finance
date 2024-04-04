const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var demandeSchema = new mongoose.Schema({
    
     echeance: {
            type: String,
            required: false,
            default: '0'
         },
       quantite: {
          type: Number,
          required: false,
          default: 0
       },
   valider: {
          type: Number,
          required: false,
          default: 0
       },
    montant: {
          type: Number,
          required: false,
          default: 0
       },
               payement: [{
      
        status: {
            type: Number,
            default: 0
        },
        montant: {
          type: Number,
          default: 0
      },
      date: {
        type: String,
        default: '0'
    },
        
        
    }],
      montant_payer: {
          type: Number,
          required: false,
          default: 0
       },
   reste_payer: {
          type: Number,
          required: false,
          default: 0
       },
    date_debut: {
            type: String,
            required: false,
            default: '0'
          },
      date_fin: {
            type: String,
            required: false,
            default: '0'
          },
          delete: {
            type: Number,
            default: 0
        }, 
historique :[
    {  
             date: {
            type: String,
            required: false,
            default: '0'
          },
           montant:  {
            type: Number,
            default: 0
        },
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],
        produit_id: { type: Schema.Types.ObjectId, ref: 'Agrega' },
        fournisseur_id: { type: Schema.Types.ObjectId, ref: 'User' }

    },
    
    {
    collection: 'demandes',
    timestamps: true
  });

module.exports = mongoose.model('Demande', demandeSchema);




