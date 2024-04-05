const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

var categorieSchema = new mongoose.Schema({

 validation: {
	type: Number,
        default: 0
    },    
     nom: {
            type: String,
            required: false,
            default: '0'
         },

     status_fournisseur: {
            type: Number,
            default: 0
        },
 variation: {
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
     distributeur_id: { type: Schema.Types.ObjectId, ref: 'User' },

    },
    
    {
    collection: 'categories',
    timestamps: true
  });

categorieSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Categorie', categorieSchema);
