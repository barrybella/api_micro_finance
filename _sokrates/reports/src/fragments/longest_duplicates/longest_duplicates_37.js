controllers/commandeControllers.js [1215:1236]:
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
            },
            sort:{
                'createdAt': -1
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1292:1313]:
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
            },
            sort:{
                'createdAt': -1
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



