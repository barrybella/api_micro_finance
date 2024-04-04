const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var transporteSchema = new mongoose.Schema({
        
        minimum: {
            type: String,
            required: false,
            default: '0'
        },
        maximum: {
            type: String,
            required: false,
            default: '0'
        },
      
        prix: {
            type: Number,
            required: false,
            default: 0
        },

           delete: {
            type: Number,
            default: 0
        },
        user_id: { type: Schema.Types.ObjectId, ref: 'User' },
        chauffeure_id: { type: Schema.Types.ObjectId, ref: 'User' },
        stock_id: { type: Schema.Types.ObjectId, ref: 'Stock' },
        zone_id: { type: Schema.Types.ObjectId, ref: 'Zone' },
        camion_id: { type: Schema.Types.ObjectId, ref: 'Camion' },




        }, 
    {
    collection: 'transportes',
    timestamps: true
  });

module.exports = mongoose.model('Transporte', transporteSchema);
