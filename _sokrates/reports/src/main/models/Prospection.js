const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var prospectionSchema = new mongoose.Schema({
    designation: {
        type: String,
        default: '0'
          },
   
        siege: {
            type: String,
            default: '0'
        },

        responsable: {
            type: String,
            default: '0'        },
        
        
        telephone: {
            type: String,
            default: '0'
        },
        secteur: {
            type: String,
            default: '0'
        },
        date_rendez_vous: {
            type: String,
            default: '0'
        },
        heure_rendez_vous: {
            type: String,
            default: '0'
        },
        delete: {
            type: Number,
            default: 0
        },
        statu: {
            type: Number,
            default: 0
        },
        }, 
    {
    collection: 'prospections',
    timestamps: true
  });

module.exports = mongoose.model('Prospection', prospectionSchema);
