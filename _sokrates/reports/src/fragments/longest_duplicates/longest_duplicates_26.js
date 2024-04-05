controllers/commandeControllers.js [1055:1076]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const { page = req.params.page, limit = 5} = req.query;
    try{
        const options={
            page: page,
            limit: limit,
            populate:{
                path: 'user_id'
            },
            populate:{
                path: 'client_id'
            },
            populate:{
                path: 'panier.produit_id',
                populate: {
                    path: "categorie_id" 
                 },
            },
            populate:{
                path: 'panier.zone_id',
                populate: {
                    path: "commune_id" 
                 },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1131:1152]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const { page = req.params.page, limit = 5} = req.query;
    try{
        const options={
            page: page,
            limit: limit,
            populate:{
                path: 'user_id'
            },
            populate:{
                path: 'client_id'
            },
            populate:{
                path: 'panier.produit_id',
                populate: {
                    path: "categorie_id" 
                 },
            },
            populate:{
                path: 'panier.zone_id',
                populate: {
                    path: "commune_id" 
                 },
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



