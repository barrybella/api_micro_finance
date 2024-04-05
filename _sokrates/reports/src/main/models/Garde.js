
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var gardeSchema = new mongoose.Schema({
    
      categorie: {
        type: String,
        //unique: true,
        //required: true,
        default :0
      },
      commission:  {
        type: Number,
        default: 0
    },
      objectif:  {
        type: Number,
        default: 0

    },
     total:  {
        type: Number,
        default: 0
    },
     dernier:  {
        type: String,
        default: '0'
    },
        delete:  {
        type: Number,
        default: 0
    },

historique :[
    {
          total: {
        type: Number,
        //unique: true,
        //required: true,
        default :0
      },
      date: {
        type: String,
        //unique: true,
        //required: true,
        default :0
      },
        dernier: {
        type: String,
        //unique: true,
        //required: true,
        default :0
      },
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],


    produit :[
    {  
           categorie: {
        type: String,
        //unique: true,
        //required: true,
        default :'0'
      },
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],
  //distributeur_id: { type: Schema.Types.ObjectId, ref: 'Distributeur' }
  }, {
      collection: 'gardes',
      timestamps: true
  });

module.exports = mongoose.model('Garde',gardeSchema);
