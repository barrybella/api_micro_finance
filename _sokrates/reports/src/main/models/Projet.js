const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var projetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
   pourcentage: {
        type: Number,
        min:0,
        max:100,
        default: 0
    },
  
    status: {
        type: Number,
        default: 0
      },
    description: {
        type: String,
        trim: true,
        required: true
    },
  image: [{
  images:{
	type:String,
        default:'0'
    } }],
    pays:{
        type: String,
        trim: true,
        default:null
    },
    ville:{
        type: String,
        trim: true,
        default:null
    },
    quartier:{
        type: String,
        trim: true,
        default:null
    },
    latitude: {
        type: String,
        trim: true,
     default:null
    },
    longitude: {
        type: String,
        trim: true,
       default:null
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  // levele_id: { type: Schema.Types.ObjectId, ref: 'Levele' }

},
{
    collection: 'projets',
    timestamps: true
  }
)
module.exports = mongoose.model('Projet', projetSchema);
