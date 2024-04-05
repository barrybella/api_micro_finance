const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var sliderSchema = new mongoose.Schema({
    
     titre: {
            type: String,
            required: false,
            default: '0'
         },
    description: {
          type: String,
          required: false,
          default: '0'
       },
    image: {
            type: String,
            required: false,
            default: '0'
          },
          delete: {
            type: Number,
            default: 0
        },
    },
    
    {
    collection: 'slideres',
    timestamps: true
  });

module.exports = mongoose.model('Slider', sliderSchema);
