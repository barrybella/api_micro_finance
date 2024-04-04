const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var leveleSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        required: true,
        trim: true
    },
  
    status: {
        type: Number,
        default: 0,
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
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },   
 projet_id: { type: Schema.Types.ObjectId, ref: 'Projet' }
},
{
    collection: 'leveles',
    timestamps: true
  }
);


module.exports = mongoose.model('Levele', leveleSchema);
