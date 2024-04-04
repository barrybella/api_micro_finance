const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

var passportSchema = new mongoose.Schema({

   
     nom: {
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
    collection: 'passports',
    timestamps: true
  });

  passportSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Passport', passportSchema);
