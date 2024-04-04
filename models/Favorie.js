const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var favorieSchema = new mongoose.Schema({
    
  
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    produit_id: { type: Schema.Types.ObjectId, ref: 'Agrega' },
       
    delete:  {
        type: Number,
        default: 0
    }

  }, {
      collection: 'favories',
      timestamps: true
  });

module.exports = mongoose.model('Favorie', favorieSchema);
