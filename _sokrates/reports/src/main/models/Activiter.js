const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var activiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25,
        trim: true
    },
 cout: {
	type: Number,
        default: 0
      },
status: {
        type: Number,
        default: 0
      },
    description: {
        type: String,
        trim: true,
        required: true,
    },
      image: [{
  images:{
	type:String,
        default:'0'
    } }],
    
    pays:{
        type: String,
        trim: true,
        default:true
    },
    ville:{
        type: String,
        trim: true,
        default:null
    },
  pourcentage: {
        type: Number,
        min:0,
	max:100,
        default: 0
    },
    openDate: {
        type: String,
        trim: true,
        default: null
    },
    closeDate: {
        type: String,
        trim: true,
        default: null
    },
      messages: [{
    message:{
	type: String,
        default:'0' },
         date:{
	type: String,
        default:'0' },
        user_id: { type: Schema.Types.ObjectId, ref: 'User' },
         
     }
],
   vid: [{
    videos:{
        type: String,
        default:'0' }
     }],
        audio: [{
   audios:{
	type: String,
        default:'0' }
     }],
   produits: [{
       unite: {
	type:Number,
        default:0,
        maxLength: 25,
        trim: true
    },
      marque: {
        type:String,
	default:'0',
        maxLength: 25,
        trim: true
    },
   cout: {
	type:Number,
        default:0,
        maxLength: 25,
        trim: true
    },
        produit_id: { type: Schema.Types.ObjectId, ref: 'Agrega' }, 
    }],
   services: [{
            name: {
	type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    unite: {
	type: String,
        maxLength: 50,
        required: false,
        trim: true
    },
   prix_unitaire: {
        type: String,
        maxLength: 50,
        required: false,
        trim: true
    },


    description: {
        type: String,
        trim: true,
        max: 200,
        default: null
    },
    cout: {
	type:String,
        required: true,
        trim:true,
    },
  images:{
	type:String,
        default:'0'
    }
    }],
    quartier:{
        type: String,
        trim: true,
        default:null
    },
    latitude: {
        type: String,
        trim: true,
    },
    longitude: {
        type: String,
        trim: true,
    },
 levele_id: { type: Schema.Types.ObjectId, ref: 'Levele' },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }

},
{
    collection: 'activiters',
    timestamps: true
  }
)
module.exports = mongoose.model('Activiter', activiterSchema);
