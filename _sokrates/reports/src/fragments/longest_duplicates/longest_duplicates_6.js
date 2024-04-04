models/Carte.js [49:89]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    },
      montant:  {
        type: Number,
        default: 0
    },
 active:  {
        type: Number,
        default: 0
    },
    delete:  {
        type: Number,
        default: 0
    },

 quantites: {
            type: Number,
            required: false,
           default :0
          },
 quantites_restant: {
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
          },

    produit :[
    {   carte_id: {  type: String,
        default: 0,
        require: false },
        categorie_id: {  type: String,
            required: false,
            default :'0' },
        quantites: {
            type: Number,
            required: false,
           default :0
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



models/Vente.js [11:51]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      },
      montant:  {
        type: Number,
        default: 0
    },
 active:  {
	type: Number,
        default: 0
    },
    delete:  {
	type: Number,
        default: 0
    },

 quantites: {
            type: Number,
            required: false,
           default :0
          },
 quantites_restant: {
            type: Number,
            required: false,
           default :0
          },
          quantites_vendu: {
            type: Number,
            required: false,
           default :0
          },

    produit :[
    {   carte_id: {  type: String,
        default: 0,
        require: false },
        categorie_id: {  type: String,
            required: false,
            default :'0' },
        quantites: {
            type: Number,
            required: false,
           default :0
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



