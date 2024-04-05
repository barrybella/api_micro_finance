models/Distributeur.js [36:81]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



models/Utilisateur.js [25:68]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



