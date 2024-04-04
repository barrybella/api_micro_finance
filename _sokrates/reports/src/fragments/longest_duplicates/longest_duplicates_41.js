models/Carte.js [92:112]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
          },
        montant:  {
            type: Number,
            default: 0
        },
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],
    distributeur_id: { type: Schema.Types.ObjectId, ref: 'User' }
  }, {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



models/Vente.js [53:73]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
          },
	montant:  {
            type: Number,
            default: 0
        },
          delete:  {
            type: Number,
            default: 0
        },
    }
    ],
    distributeur_id: { type: Schema.Types.ObjectId, ref: 'User' }
  }, {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



