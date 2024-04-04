const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate-v2');
var CommentaireSchema = new mongoose.Schema({
        user: {
            type: String,
        },
        idCommande: {
            type: String,
        },
      comment: {
        type: String,
      },
      image: {
        type: String,
        required: false,
        default: ''
      },
    }, 
    {
    collection: 'Commentaires',
    timestamps: true
  });
  CommentaireSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Commentaire', CommentaireSchema);