


const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var activeSchema = new mongoose.Schema({
    
      identifiant: {
        type: String,
        unique: true,
        required: true,
        //default :0
      },
      montant:  {
        type: Number,
        default: 0
    },
    delete:  {
        type: Number,
        default: 0
    },
    produit :[
    {  
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],
    distributeur_id: { type: Schema.Types.ObjectId, ref: 'Active' }
  }, {
      collection: 'actives',
      timestamps: true
  });

module.exports = mongoose.model('Active', activeSchema);


