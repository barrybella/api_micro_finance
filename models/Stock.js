const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
var miseSchema = new mongoose.Schema({
    fournisseur_id: { type: Schema.Types.ObjectId, ref: 'User' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    produit_id: { type: Schema.Types.ObjectId, ref: 'Agrega' },
   
  
    prix: {
        type: Number,
        default:0
    },
    quantite: {
        type: Number,
        default: 0
    },
    quantite_disponible: {
        type: Number,
        default: 0
    },
   
    delete: {
        type: Number,
        default: 0
    },
  },{
    collection: 'stocks',
    timestamps: true
  });
  miseSchema.plugin(mongoosePaginate);
  module.exports = mongoose.model('Stock',miseSchema);
