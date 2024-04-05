controllers/commandeControllers.js [979:997]:
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1292:1310]:
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



