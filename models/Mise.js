const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
var miseSchema = new mongoose.Schema({
    client_id: { type: Schema.Types.ObjectId, ref: 'User' },
    commande_id: { type: Schema.Types.ObjectId, ref: 'Commande' },
   
  
    date: {
        type: String,
        default:0
    },
    livrer: {
        type: Number,
        default: 0
    },
    valider: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    },
    delete: {
        type: Number,
        default: 0
    },
  },{
    collection: 'mises',
    timestamps: true
  });

  module.exports = mongoose.model('Mise',miseSchema);
