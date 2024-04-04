controllers/commandeControllers.js [986:1010]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
         return res.status(500).send(new Error('Server Error...'))
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1141:1164]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
        let commandes = await Commande.paginate({"status":1}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



