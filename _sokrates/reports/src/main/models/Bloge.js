const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var blogSchema = new mongoose.Schema({
    
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
    collection: 'bloges',
    timestamps: true
  });

module.exports = mongoose.model('Bloge', blogSchema);
