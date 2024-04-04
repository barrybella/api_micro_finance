const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

var agregaSchema = new mongoose.Schema({
          societe: {
        type: String,
        default: '0'
          },
 status: {
	type: Number,
        default: 0
    },
    delete: {
	type: Number,
        default: 0
    },
  etat: {
	type: Number,
        default: 0
    },
    commentaire: {
	type: String,
        default: '0'
    },
   validation: {
	type: Number,
        default: 0
    },
 unite: {
        type: String,
        default: '0'
    },       
        pays: {
            type: String,
            default: '0'
        },
        type: {
            type: String,
            required: false
        },
       active: {
          type: Number,
            default: 0
        },
 devise: {
            type: String,
            default: '0'
        },
 echantillon: {
            type: Number,
            default: 0
        },
        prix: {
            type: Number,
            required: true
        },
	prix_deuxieme: {
            type: Number,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        ville: {
            type: String,
            required: false
        },
        zone: {
            type: String,
            required: false
        },
        description: {
            type: String,
            default: '0'
        },
      flash: {
            type: Number,
            default: 0
        },
        promo: {
            type: Number,
            default: 0
        },
        delete: {
            type: Number,
            default: 0
        },
	compte: {
            type: Number,
            default: 0
        },
          categorie_id: { type: Schema.Types.ObjectId, ref: 'Categorie' },

    distributeur_id: { type: Schema.Types.ObjectId, ref: 'User' },
        }, 
    {
    collection: 'agregas',
    timestamps: true
  });
  agregaSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Agrega', agregaSchema);
