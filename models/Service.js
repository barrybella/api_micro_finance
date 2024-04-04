const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var serviceModel = new mongoose.Schema({
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
    },
   activiter_id: { type: Schema.Types.ObjectId, ref: 'Activiter' },

},
{
    collection: 'services',
    timestamps: true
  }
)


module.exports = mongoose.model('Service', serviceModel);
