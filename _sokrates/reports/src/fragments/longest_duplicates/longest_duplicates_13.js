models/Pointage.js [4:33]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    unite: {
        type: String,
        required: false
      },
      type: {
        type: String,
        required: true
      },
      depart: {
        type: String,
        required: false
      },
      ariver: {
        type: String,
        required: false
      },
      date: {
        type: Date,
      },
      quantite: {
        type: Number,
        required: false,
        default: 0
      },
      nbToure: {
        type: Number,
        required: false,
        default: 0
      },
      flotte_id: { type: Schema.Types.ObjectId, ref: 'Flotte' },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



models/Relation.js [25:54]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            unite: {
              type: String,
              required: false
            },
            type: {
              type: String,
              required: true
            },
            depart: {
              type: String,
              required: false
            },
            ariver: {
              type: String,
              required: false
            },
            date: {
              type: Date,
            },
            quantite: {
              type: Number,
              required: false,
              default: 0
            },
            nbToure: {
              type: Number,
              required: false,
              default: 0
            },
            flotte_id: { type: Schema.Types.ObjectId, ref: 'Flotte' },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



