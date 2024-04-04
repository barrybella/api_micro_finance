const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var communeSchema = new mongoose.Schema({
    region_id: { type: Schema.Types.ObjectId, ref: 'region' },

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
        },
       
        }, 
    {
    collection: 'commune',
    timestamps: true
  });

module.exports = mongoose.model('commune', communeSchema);