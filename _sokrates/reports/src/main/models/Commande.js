const mongoose = require('mongoose');
//autoIncrement = require('mongoose-auto-increment');
config = require('../DB');
var connection = mongoose.createConnection(config.DB);
const mongoosePaginate = require('mongoose-paginate-v2');
//autoIncrement.initialize(connection);
//autoIncrement = require('mongoose-auto-increment');
//config = require('../DB');
//ar connection = mongoose.createConnection(config.DB);
//autoIncrement.initialize(connection);
const Schema = mongoose.Schema;

var commandeSchema = new mongoose.Schema({

    montantTotal: {
        type: Number,
        default: 0
    },
    agence_name: {
      type: String,
       required: false,
       default: '0'
       }, 
       agence_telephone: {
        type: String,
         required: false,
         default: '0'
         },
    count: {
      type: Number,
      default: 1
  },
    identifiant: {
      type: Number,
      default: 0
  },
    status: {
        type: Number,
        default: 0
    },
    approuve: {
      type: Number,
      default: 0
  },
    societe: {
      type: String,
      default: '0'
  },
    refrence: {
      type: String,
      default: '0'
  },
 
    date_commande: {
        type: String,
        required: false
    },
        panier: [{
        //etape:{ type: Schema.Types.ObjectId, ref: 'statuts'}
          //, 
          categorie_libelle: {
            type: String,
            default: '0'
        },
        produit_libelle: {
          type: String,
          default: '0'
        },
          client: {
            type: String,
             required: false,
             default: '0'
             }, 
             telephone: {
              type: String,
               required: false,
               default: '0'
               },
        quantite: {
        type: Number,
        default: 0
          },
          montant: {
            type: Number,
            default: 0
              },

              status: {
                type: Number,
                default: 0
                  },
                  approuve: {
                    type: Number,
                    default: 0
                      },
            zone: {
              type: String,
               required: false,
               default: '0'
               },
               zone_id: {
                type: String,
                 required: false,
                 default: '0'
                 },
               passport_id: {
                type: String,
                 required: false,
                 default: 0
                 },
                 passport_libelle: {
                  type: String,
                   required: false,
                   default: 0
                   },
                     produit_id: { type: Schema.Types.ObjectId, ref: 'Agrega'},
        observationBanki: {
        type: String,
        default: ''
          },
             // commune_id: { type: Schema.Types.ObjectId, ref: 'Commune' },
             


        }],


 //  commandeSchema.plugin(autoIncrement.plugin, { model: 'Commande', field: 'reference',startAt:001}),
//         zone_id: { type: Schema.Types.ObjectId, ref: 'Zone' },
        
        client_id: { type: Schema.Types.ObjectId, ref: 'client'},

        user_id: { type: Schema.Types.ObjectId, ref: 'User'},

        }, 
    {
    collection: 'commandes',
    timestamps: true
  });
  commandeSchema.plugin(mongoosePaginate);
//commandeSchema.plugin(autoIncrement.plugin, { model: 'Commande', field: 'reference',startAt:001});
module.exports = mongoose.model('Commande', commandeSchema);
