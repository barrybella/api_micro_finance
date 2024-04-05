models/Distributeur.js [49:81]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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



models/User.js [195:227]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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



