controllers/commandeControllers.js [979:1009]:
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
            }
        }
        //  let commandes = await Commande.paginate({"status":0}, options).sort({"createdAt": -1})
        let commandes = await Commande.paginate({"status":1}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1331:1361]:
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
            }
        }
        //  let commandes = await Commande.paginate({"status":0}, options).sort({"createdAt": -1})
        let commandes = await Commande.paginate({"status":1}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



