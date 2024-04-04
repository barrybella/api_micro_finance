const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var regionSchema = new mongoose.Schema({
    pays_id: { type: Schema.Types.ObjectId, ref: 'pays' },

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
    collection: 'region',
    timestamps: true
  });

module.exports = mongoose.model('region', regionSchema);