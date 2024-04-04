const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

var zoneSchema = new mongoose.Schema({
        
      
        localite: {
            type: String,
            required: false
        },
        commune_id: { type: Schema.Types.ObjectId, ref: 'commune' },

        plage:[
          {
          id_zone: {
                  type: String,
                  default: 0,
                  require: false
                 },
                 passport_id: { 
                   type: Schema.Types.ObjectId, ref: 'Passport'
                   },
                 produit_id: { 
                   type: Schema.Types.ObjectId, ref: 'Agrega'
                   },
                 minimum: {
                  type: Number,
                  default: 0,
                  require: false
              },
              maximum: {
                type: Number,
                default: 0,
                require: false
            },
          total: {
              type: Number,
              default: 0,
              require: false
          },
          status: {
              type: Number,   
              default: 0
          
          },
          delete: {
          type: Number,
          default: 0
          
          },
         
        


              }
          ],

           delete: {
            type: Number,
            default: 0
        },
        user_id: { type: Schema.Types.ObjectId, ref: 'User' },
      
        }, 
    {
    collection: 'zones',
    timestamps: true
  });
  zoneSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Zone', zoneSchema);
