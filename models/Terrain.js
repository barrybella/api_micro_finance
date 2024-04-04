const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
var terrainSchema = new mongoose.Schema({
    ville: {
      type: String,
      required: false
    },
    commune: {
        type: String,
        required: false
      },
      quartier: {
        type: String,
        required: false
      },
      surface: {
        type: String,
        required: false
      },
      prix: {
        type: String,
        required: false
      },
      description: {
        type: String,
        required: false
      },
      photos: Array,
    
  }, {
    collection: 'terrains',
    timestamps: true
  });

  module.exports = mongoose.model('Terrain', terrainSchema);
