const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
var relationSchema = new mongoose.Schema({
    client_id: { type: Schema.Types.ObjectId, ref: 'User' },
    fournisseur_id: { type: Schema.Types.ObjectId, ref: 'User' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    pointage_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    besoin_id: { type: Schema.Types.ObjectId, ref: 'Besoin' },
    nbEngin: Number,
    stop: {
      type: Number,
      default: 0
    },
    engin: [{
        flotte_id: { type: Schema.Types.ObjectId, ref: 'Flotte' },
        status: {
            type: Number,
            default: 0
        },
        date: {
            type: Date,
            default: Date.now
        },
        pointages: [{
            unite: {
              type: String,
              required: false
            },
            type: {
              type: String,
              required: true
            },
            depart: {
              type: String,
              required: false
            },
            ariver: {
              type: String,
              required: false
            },
            date: {
              type: Date,
            },
            quantite: {
              type: Number,
              required: false,
              default: 0
            },
            nbToure: {
              type: Number,
              required: false,
              default: 0
            },
            flotte_id: { type: Schema.Types.ObjectId, ref: 'Flotte' },
            user_id: { type: Schema.Types.ObjectId, ref: 'User' },
            relation_id: { type: Schema.Types.ObjectId, ref: 'Relation' },
            delete: {
              type: Number,
              default: 0
            },
            status: {
              type: Number,
              default: 0
            },
        }],
        
    }],
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        default: 0
    },
    delete: {
        type: Number,
        default: 0
    },
  },{
    collection: 'relations',
    timestamps: true
  });

  module.exports = mongoose.model('Relation', relationSchema);