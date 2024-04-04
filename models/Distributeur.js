var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

var distributeurSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: false,
      required: false
    },
    tel: {
      type: String,
      unique: true,
      required: false
    },
 date_debut: {
      type: String,
      default: '0'
    },
    date_fin: {
      type: String,
      default: '0'
    },
 types: {
      type: String,
      default: '0'
    },
    nb_commande: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      required: false
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

  distributeurSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  };

  distributeurSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
  };

  distributeurSchema.methods.generateJwt = function() {
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
      nb_commande: this.nb_commande,
      type: this.type,
 types: this.types,
 date_debut: this.date_debut,
      date_fin: this.date_fin,      
role: this.role,
      valider: this.valider,
      exp: parseInt(expiry.getTime() / 1000),
    }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  };

  module.exports = mongoose.model('Distributeur', distributeurSchema);
