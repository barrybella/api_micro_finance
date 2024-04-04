const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var vaccinationSchema = new mongoose.Schema({
        ville: {
            type: String,
            required: false
        },
        lieu: {
            type: String,
            required: false
        },
        horaire: {
            type: String,
            required: false
        },
        ouverture: {
            type: String,
            required: false
        },
        altitude: {
            type: String,
            required: false
        },
        longitude: {
            type: String,
            required: false
        },
       
        }, 
    {
    collection: 'vaccinations',
    timestamps: true
  });

module.exports = mongoose.model('Vaccination', vaccinationSchema);