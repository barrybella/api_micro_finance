const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var affaireSchema = new mongoose.Schema({
    prospection_id: { type: Schema.Types.ObjectId, ref: 'Prospection' },
        user_id: {
            type: String,
            default:'0'
        },
        statu: {
            type: Number,
            default: 0
        },
        delete: {
            type: Number,
            default: 0
        }
        }, 
    {
    collection: 'affaires',
    timestamps: true
  });

module.exports = mongoose.model('Affaire', affaireSchema);
