const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');

var ClientSchema = new mongoose.Schema({

        name: {
            type: String,
        },
        prenoms: {
            type: String,
        },
        telephone: {
            type: Number,
        },
        type_identite: {
          type: String,
      },
      numero_piece: {
        type: String,
      },
      numero_compte: {
        type: String,
      },
        delete: {
            type: Number,
            default: 0
        },
        user_id: { type: Schema.Types.ObjectId, ref: 'User'},
        }, 
    {
    collection: 'Clients',
    timestamps: true
  });
  ClientSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Client', ClientSchema);