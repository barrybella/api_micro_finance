const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PaysSchema = new mongoose.Schema({

        libelle: {
            type: String,
            default:'0'
        },
        status: {
            type: Number,
            default: 0
        },
        delete: {
            type: Number,
            default: 0
        }
        }, 
    {
    collection: 'payss',
    timestamps: true
  });

module.exports = mongoose.model('pays', PaysSchema);