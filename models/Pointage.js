const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var pointageSchema = new mongoose.Schema({
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
      delete: {
        type: Number,
        default: 0
      },
      status: {
        type: Number,
        default: 0
      },
      relation_id: { type: Schema.Types.ObjectId, ref: 'Relation' },
      user_id: { type: Schema.Types.ObjectId, ref: 'User' },
     }, 
    {
    collection: 'pointages',
    timestamps: true
  });

module.exports = mongoose.model('Pointage', pointageSchema);