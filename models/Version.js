const mongoose = require('mongoose')
const Schema = mongoose.Schema


var VersionSchema = new mongoose.Schema({
  type_system:{
    type:String,
    trim:true,
    default: "ios"
  },
  version:{
    type:String,
    trim:true,
    default: "1.0.0"
  },
  build:{
    type:String,
    trim:true,
    default: "1"
  }
},
 {
      collection: 'versions',
      timestamps: true
  }
)

module.exports = mongoose.model('Version', VersionSchema)
