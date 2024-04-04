models/Activiter.js [101:134]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            name: {
	type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    unite: {
	type: String,
        maxLength: 50,
        required: false,
        trim: true
    },
   prix_unitaire: {
        type: String,
        maxLength: 50,
        required: false,
        trim: true
    },


    description: {
        type: String,
        trim: true,
        max: 200,
        default: null
    },
    cout: {
	type:String,
        required: true,
        trim:true,
    },
  images:{
	type:String,
        default:'0'
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



models/Service.js [7:40]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    name: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true
    },
    unite: {
	type: String,
        maxLength: 50,
        required: false,
        trim: true
    },
   prix_unitaire: {
	type: String,
        maxLength: 50,
        required: false,
        trim: true
    },
    
    
    description: {
        type: String,
        trim: true,
        max: 200,
        default: null
    }, 
    cout: {
        type:String, 
        required: true,
        trim:true,
    },
  images:{
	type:String,
        default:'0'
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



