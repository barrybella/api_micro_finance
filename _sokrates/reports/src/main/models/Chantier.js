const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var chantierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 25,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    images:{
        type: String,
        default: '0'
    },
    
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
    user_id: { type: Schema.Types.ObjectId, ref: 'User' }

},
{
    collection: 'chantiers',
    timestamps: true
  }
);


module.exports = mongoose.model('Chantier', chantierSchema);
