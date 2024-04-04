const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var venteSchema = new mongoose.Schema({

      identifiant: {
        type: String,
        unique: true,
        required: true,
        //default :0
      },
      montant:  {
        type: Number,
        default: 0
    },
 active:  {
	type: Number,
        default: 0
    },
    delete:  {
	type: Number,
        default: 0
    },

 quantites: {
            type: Number,
            required: false,
           default :0
          },
 quantites_restant: {
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
          },

    produit :[
    {   carte_id: {  type: String,
        default: 0,
        require: false },
        categorie_id: {  type: String,
            required: false,
            default :'0' },
        quantites: {
            type: Number,
            required: false,
           default :0
          }, quantites_restant: {
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
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
    distributeur_id: { type: Schema.Types.ObjectId, ref: 'User' }
  }, {
      collection: 'ventes',
      timestamps: true
  });

module.exports = mongoose.model('Vente', venteSchema);

