var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var utilisateurSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    tel: {
      type: String,
      unique: true,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    
    user_id: {
      type: String,
      default:'0'
  },
    nameEntreprise: String,
    ville: String,
    commune: String,
    quartier: String,
    type: String,
    logo: String,
    role: {
      type: String,
      default: 'user'
    },
    codes: {
      type: String,
      default: '0'
    },
    valider: {
      type:String,
      default: 'valider'
    },
    valide: {
      status: {
        type: Number,
        default: 0
      },
      besoin_id: { type: Schema.Types.ObjectId, ref: 'Besoin' }
    },
    zone: {
      type: String,
      default:'0',
      required: false
    },
    active: {
      type: Number,
        default: 0
    },
    devise: {
      type: Number,
      default:0,
      required: false
    },
    // relation_id: { type: Schema.Types.ObjectId, ref: 'Relation' },
    hash: String,
    salt: String
  });

  utilisateurSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

  utilisateurSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  utilisateurSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      tel: this.tel,
      // relation_id: this.relation_id,
      nameEntreprise: this.nameEntreprise,
      ville: this.ville,
      quartier: this.quartier,
      type: this.type,
      role: this.role,
      valider: this.valider,
      user_id: this.user_id,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

  module.exports = mongoose.model('Utilisateur',utilisateurSchema);
