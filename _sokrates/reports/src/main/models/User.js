var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const mongoose =  require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
//autoIncrement = require('mongoose-auto-increment');
//config = require('../DB');
//var connection = mongoose.createConnection(config.DB);
//autoIncrement.initialize(connection);
const Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: false,
      required: false
    },
 acte: {
      type: Number,
 default: 0
    },
    actes: {
      type: Number,
 default: 0
    },
    quantite: {
      type: Number,
 default: 0
    },
    montant_total: {
      type: Number,
 default: 0
    },
    montant_restant: {
      type: Number,
 default: 0
    },
    montantPayer: {
      type: Number,
 default: 0
    },
    historique :[
      {   date: {  type: String,
          default: '0',
          require: false },
          montant: {
            type: Number,
       default: 0
          },
          quantite: {
            type: Number,
       default: 0
          },

         
      }
      ],
   commande: {
      type: Number,
 default: 0
    },

actes: {
      type: Number,
 default: 0
    },
montant_payer: {
  type: Number,
  required: false,
  default: 0
},
reste_payer: {
  type: Number,
  required: false,
  default: 0
},
date_debut: {
    type: String,
    required: false,
    default: '0'
  },
date_fin: {
    type: String,
    required: false,
    default: '0'
  },
  delete: {
    type: Number,
    default: 0
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
  reference: {
      type: String,
       default: '0'
    },
    societe: {
      type: String,
       default: '0'
    },
  identifiant: {
      type: Number,
 default: 0
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
   roles :[
    {   role: {  type: String,
        default: 'user',
        require: false },
 user_id: {
      type: String,
      default: '0'
    }
       
    }
    ],
    codes: {
      type: String,
      default: '0'
    },
     prenom: {
      type: String,
      default: '0'
    },
 coordonner: {
      type: String,
      default: '0'
    },
 commune: {
      type: String,
      default: '0'
    },
    photo: {
      type: String,
       default: '0'
    },
 localisation: {
      type: String,
      default: '0'
    },
    date_naissance: {
      type: String,
      default: '0'
    },
 lieu_naissance: {
      type: String,
      default: '0'
    },
    piece: {
      type: String,
      default: '0'
    },
 branding: {
      type: String,
      default: '0'
    },
 ville: {
      type: String,
      default: '0'
    },
 numero: {
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
  
    userSchema.methods.setPassword = function(password){
      this.salt = crypto.randomBytes(16).toString('hex');
      this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    };
  
    userSchema.methods.validPassword = function(password) {
      var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
      return this.hash === hash;
    };

    userSchema.methods.generateJwt = function() {
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
          societe: this.societe,
          quartier: this.quartier,
          nb_commande: this.nb_commande,
          type: this.type,
     types: this.types,
     date_debut: this.date_debut,
          date_fin: this.date_fin,
  roles: this.roles,        
    role: this.role,
          valider: this.valider,
          exp: parseInt(expiry.getTime() / 1000),
        }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
      };
    
  //  userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'identifiant',startAt:001})
  userSchema.plugin(mongoosePaginate);
  module.exports = mongoose.model('User',  userSchema);
  
