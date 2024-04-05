
const Produit = require('../models/Agrega');
const User = require('../models/User');
const Mise = require('../models/Mise')
const Stock = require('../models/Stock');
const Carte = require('../models/Carte');


const Position= require("../models/Position")

const Commande = require('../models/Commande');

module.exports.getCommandTraiteForBankitruck = async function(req, res){
    
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
            },
            sort:{
                createdAt: '-1'
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
     }
 }

 module.exports.commandeCount = async function(req, res){
    try{
        let commandeEncours=  await Commande.find({"status":0, "client_id": req.body.client_id})
        let commandeTraitees=  await Commande.find({"status":1, "client_id": req.body.client_id})
        // let nombreStock =  await Stock.count({"delete":0, "fournisseur_id": user_id})
        if (commandeEncours && commandeTraitees) {
                 return res.status(200).json({commandeEncour: commandeEncours.length, commandeTraitees: commandeTraitees.length});
            } 
             else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.paginatedCommandeAttenteForBankitruck = async function(req, res){
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
            },
            sort: {
                createdAt: '-1'
            }
        }
        let commandes = await Commande.paginate({"status":0}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }



module.exports.rejeterProduit = async function(req, res){
    let idPanier = req.params.id;
    let valider = "rejeter";
    let idCommande = req.params.idCommande;
   

    try{
        let commande = await Commande.find({"_id": idCommande});
        
        commande[0].panier.forEach(result => {
            if(result._id == id){
                result.approuve = valider,
                result.save();
            }
           
         });
         commande[0].save();
         
   
         let commandes = await Commande.find({"status": 0,"_id": idCommande}).sort({"createdAt": -1});
         console.log("commande avant",commandes);
         commandes[0].panier.forEach(resulte => {
          if(resulte._id == idPanier){
              resulte.approuve = 2;
            
           }
        })
        commandes[0].save();
        setTimeout(async () => {
          let commande = await Commande.find({"status": 0,"_id": id_commande}).sort({"createdAt": -1});
             console.log("commande livrer",commande);
             commande[0].panier.forEach(resulte => {
              if(resulte.approuve == 0){
                commande[0].status = 0;
                
               }else if(resulte.approuve == 1){
                 commande[0].status = 0;
                 
                }else if(resulte.approuve == 2){
                 commande[0].status = 1;
                 
                }
               else { 
                  commande[0].status = 1;
               }
            })
            commande[0].save();
          
      }, 3500);
  
  










         if (commande[0]) {
           
            return res.status(200).json( commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.validerProduit = async function(req, res){
    let id = req.params.id;
    let valider = "valider";
    let idCommande = req.params.idCommande;
   

    try{
        let commande = await Commande.find({"_id": idCommande});
        console.log("avis",req.params.id)
        console.log("avis ii", commande)
        commande[0].panier.forEach(result => {
            if(result._id == id){
                result.approuve = valider,
                result.save();
            }
           
         });
         commande[0].save();
         if (commande[0]) {
           
            return res.status(200).json( commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.updateStock = async function(req, res){
    let id = req.params.id;
    try{
        let stock = await Stock.find({"_id": id});
      
        stock[0].quantite = req.body.quantite;
        stock[0].prix = req.body.prix;
        stock[0].produit_id = req.body.produit_id;
        stock[0].fournisseur_id = req.body.fournisseur_id;

        stock[0].save();

  
         if (stock[0]) {
           
            return res.status(200).json( stock[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.StockById = async function(req, res){
    let id = req.params.id;
    try{
        let stock = await Stock.find({"_id": id});

         if (stock) {
            return res.status(200).json(stock);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteStock = async function(req, res){
    let id = req.params.id;
    try{
        let zone = await Stock.remove({"_id": id});

         if (zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}




 module.exports.AllCommandeTraiteByCarte = async function(req, res){
    let id = req.params.id;
   // console.log("moi",user);
//  let em = "AD";
     try{
               //  let carte = await Carte.find({"_id": id,"active":1}).sort({"createdAt": -1});

         let commandes = await Commande.find({"identifiant":id,"status_relation":2,"delete":0,"status":7}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
 console.log(commandes);
          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

 module.exports.AllCommandeTraiteByDistributeur = async function(req, res){
    let id = req.params.id;
   // console.log("moi",user);
//  let em = "AD";
     try{
               //  let carte = await Carte.find({"_id": id,"active":1}).sort({"createdAt": -1});

         let commandes = await Commande.find({"client_id":id,"status_relation":2,"delete":0,"status":7}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
 console.log(commandes);
          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }




 module.exports.AllCommandeTraiteSC = async function(req, res){
//    let user=req.payload._id;
   // console.log("moi",user);
  let em = "AD";
     try{
            //   let carte = await Carte.find({"embassadeur": em}).sort({"createdAt": -1});

         let commandes = await Commande.find({"status_relation":2,"delete":0,"status":7,"identifiant":0}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
 console.log(commandes);
          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


 module.exports.AllCommandeTraiteAD = async function(req, res){
//    let user=req.payload._id;
   // console.log("moi",user);
  let em = "AD";
     try{
              let carte = await Carte.find({"embassadeur": em}).sort({"createdAt": -1});

         let commandes = await Commande.find({"status_relation":2,"delete":0,"status":7}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });

         
  


            var tab = [];
                         
                   



     
 console.log(commandes);
          if (commandes) {

             return res.status(200).json(tab);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


module.exports.AllCommandeRejeter= async function(req, res){
    let user=req.payload._id;
    console.log("moi",user);
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":1,"rejeter":1}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
 
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


module.exports.AllCommandeTel = async function(req, res){
    let user=req.params.telephone;
    console.log("moi",user);
     try{
         let commandes = await Commande.find({"telephone":user}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });

          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.allStockFournisseur = async function(req, res){
   
    let id = req.params.id;
    try{
        
        let stock = await Stock.find({"delete":0,"client_id":id}).sort({"createdAt": -1}).populate('produit_id').populate('client_id');
       // console.log('bella',stock);
         if (stock ) {
          
            return res.status(200).json(stock);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteCommande = async function(req, res){
    let id =req.body.id;
    let commentaire = req.body.commentaire;
    try{
        let commande = await Commande.find({"_id": id});
        commande[0].delete = 1;
        commande[0].rejeter = 1;
        commande[0].commentaire_rejeter = commentaire;
        commande[0].save();
         console.log("bella",commande[0]);
         if (commande[0]) {
            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.ListeCommission = async function(req, res){
    //let id = req.params.id;
    try{
        
        let options = { year: 'numeric', month: 'numeric' };
        let today  = new Date();
       let da = today.toLocaleDateString("fr-FR", options);
       let commande = await Commande.find({"delete":0,"status_relation" : 2,"status" : 7,"date_commission":da}).sort({"createdAt": -1}).populate('client_id').populate('zone_id').populate({
        path: "produit_id", 
        populate: {
           path: "categorie_id" 
        }
       });
   
         if(commande)
         {
           
          return res.status(200).json(commande);
          
         }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.CommissionListe = async function(req, res){
    //let id = req.params.id;
    try{
        
        let options = { year: 'numeric', month: 'numeric' };
        let today  = new Date();
       let da = today.toLocaleDateString("fr-FR", options);
       
       const commande = await Commande.aggregate([
        // Stage 1: Filter pizza order documents by pizza size
        { 
           $match : { delete : 0 ,status_relation : 2,status : 7,date_commission : da}
        },
        // Stage 2: Group remaining documents by pizza name and calculate total quantity
        {
           $group: { _id: "$date_commission", totalCommission: { $sum: "$benefice" } }
        }
     ] );
   
         if(commande)
         {
            const yourData = JSON.stringify(commande);
            const your = JSON.parse(yourData);
               console.log("commande",your);
          return res.status(200).json(your);
          
         }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.commission = async function(req, res){
    //let id = req.params.id;
    try{        
        let options = { year: 'numeric', month: 'numeric' };
        let today  = new Date();
       let da = today.toLocaleDateString("fr-FR", options);
      
       const commande = await Commande.aggregate([
        // Stage 1: Filter pizza order documents by pizza size
        { 
           $match : { delete : 0 ,status_relation : 2,status : 7}
        },
        // Stage 2: Group remaining documents by pizza name and calculate total quantity
        {
           $group: { _id: "$date_commission", totalCommission: { $sum: "$benefice" } }
        }
     ] );
   
         if(commande)
         {
            const yourData = JSON.stringify(commande);
            const your = JSON.parse(yourData);
               console.log("commande",your);
          return res.status(200).json(your);
          
         }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.redicat = async function(req, res){
    try{

        let options = { year: 'numeric', month: 'numeric' };
        let today  = new Date();
       let date=today.toLocaleDateString("fr-FR", options);

       // let stock = Stock.insertMany(req.body);
       let id = req.body.id;
       let montant = req.body.montant;
       let commande = await Commande.find({"delete":0,"_id":id}).sort({"createdAt": -1});
       commande[0].avance_payement = commande[0].avance_payement + montant;
       commande[0].reste_payer_fournisseur = commande[0].redicat - commande[0].avance_payement
       commande[0].save();
       
    
        if(commande[0].reste_payer_fournisseur == 0){
            let commandes = await Commande.find({"delete":0,"_id":id}).sort({"createdAt": -1});
             commandes[0].benefice = commandes[0].montantTotal - commande[0].redicat ;
             commandes[0].date_commission = date;
             commandes[0].save();
          }
         if (commande[0]) {
          
            return res.status(200).json(commande[0]);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.avanceClient = async function(req, res){

   
    try{
        
      // let stock = Stock.insertMany(req.body);
       let id = req.body.id;
       let montant = req.body.montant;
       let commande = await Commande.find({"delete":0,"_id":id}).sort({"createdAt": -1});
          commande[0].client_avance = commande[0].client_avance + montant;
          commande[0].client_reste_payer = commande[0].montantTotal - commande[0].client_avance;
          commande[0].save();
       console.log("commande",commande[0]);
         if (commande[0]) {
          
            return res.status(200).json(commande[0]);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.avance = async function(req, res){
    try{
       // let stock = Stock.insertMany(req.body);
       let id = req.body.id;
       let montant = req.body.montant;
       let commande = await Commande.find({"delete":0,"_id":id}).sort({"createdAt": -1});
          commande[0].avance_payement = commande[0].avance_payement + montant;
          commande[0].reste_payer_fournisseur = commande[0].redicat - commande[0].avance_payement
          commande[0].save();
       
         if (commande[0]) {
          
            return res.status(200).json(commande[0]);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addAprovisonement = async function(req, res){
    try{
       // let stock = Stock.insertMany(req.body);
       let id_stock = req.body.stock_id;
       let quantite = req.body.quantite;
       let stock = await Stock.find({"delete":0,"_id":id_stock}).sort({"createdAt": -1}).populate('produit_id').populate('client_id');
          stock[0].quantite = stock[0].quantite + quantite;
          stock[0].save();
        console.log('bella barry',req.body);
         if (stock[0]) {
          
            return res.status(200).json(stock[0]);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addStock = async function(req, res){
    try{
        let stock = Stock.insertMany(req.body);
       
        console.log('bella barry',req.body);
         if (stock ) {
          
            return res.status(200).json(stock );
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.allStockDisponible = async function(req, res){
    try{
        
        let stock = await Stock.find({"delete":0}).sort({"createdAt": -1}).populate('fournisseur_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });

       
       // console.log('bella',stock);
         if (stock ) {
          
            return res.status(200).json(stock);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.countStock = async function(req, res){
    let user_id= req.params.user_id
    try{
        let stock=  await Stock.find({"delete":0, "fournisseur_id": user_id})
        console.log("le stock",stock)

        // let nombreStock =  await Stock.count({"delete":0, "fournisseur_id": user_id})
        if (stock) {
            let nombreStock =  stock.length
            console.log("nombre de stock", nombreStock)
                 return res.status(200).json(nombreStock);
            } 
             else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}




module.exports.allStockTotal = async function(req, res){
    
   // const { page = req.params.page, limit = 10 } = req.query;
   
    try{
    //  const stocks = await Stock.paginate({}, { page, limit });

        let stock = await Stock.find({"delete":0}).sort({"createdAt": -1}).populate('fournisseur_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
         if (stock ) {
          
            return res.status(200).json(stock);
            // return res.status(200).json(stocks);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.allPaginatedStock = async function(req, res){
    const { page = req.params.page, limit = 10 } = req.query;

    let user_id = req.payload._id;
console.log("utilisateur",user_id);
    const options={
        page: page,
        limit: limit,
        populate:{
            path: 'fournisseur_id'
        },
        populate:{
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
        },
         sort:{
             "createdAt": -1
         }
    }
   
    try{
        let stock = await Stock.paginate({"fournisseur_id":user_id}, options)
        console.log("utilisateur",stock);

         if (stock) {
          
            return res.status(200).json(stock);
            // return res.status(200).json(stocks);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.allStock = async function(req, res){
    let user_id= req.params.user_id
   // const { page = req.params.page, limit = 10 } = req.query;
   
    try{
    //  const stocks = await Stock.paginate({}, { page, limit });

        let stock = await Stock.find({"delete":0, "user_id": user_id}).sort({"createdAt": -1}).populate('fournisseur_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
         if (stock ) {
          
            return res.status(200).json(stock);
            // return res.status(200).json(stocks);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.chercherUneCommandeParSaReference = async function(req, res){
    //Declaration et suppression de tous les blancs dans la référence
    let reference= req.body.reference.trim()
    try{
        // let commandes = await Commande.paginate({"status":0}, options).sort({"createdAt": -1})
        let commandes = await Commande.find({"refrence":reference})
        console.log(commandes)
        if (commandes) {
                return res.status(200).json(commandes);
        }
        else {
            commandes=[]
            return res.status(200).json(commandes);
            // return res.status(404).send(new Error('Erreur 404...'))
        }
        }
    catch (error) {
      return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.listeCommandeByidUser = async function(req, res){
    var user_id = req.params.user_id;
    try{
        let commande = await Commande.find({"user_id": user_id}).sort({"createdAt": -1}).limit(1);

         if (commande) {

            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))    }
}


module.exports.getAllCommandeStatusDifferentZeroByUserId = async function(req, res){
    var user_id = req.params.user_id;
    try{
        let commandes = await Commande.find({"user_id": user_id, "status": {$ne: 0}}).sort({"createdAt": -1}).populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });

         if (commandes) {
            return res.status(200).json(commandes);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.livrerProduit = async function(req, res){

    try{
       let id_commande = req.params.id_commande;
       let id_panier = req.params.id;
       let commandes = await Commande.find({"status": 0,"_id": id_commande}).sort({"createdAt": -1});
       console.log("commande avant",commandes);
       commandes[0].panier.forEach(resulte => {
        if(resulte._id == id_panier){
            resulte.status = 1;
          
         }
      })
      commandes[0].save();
      setTimeout(async () => {
        let commande = await Commande.find({"status": 0,"_id": id_commande}).sort({"createdAt": -1});
           console.log("commande livrer",commande);
           commande[0].panier.forEach(resulte => {
            if(resulte.status == 0){
              commande[0].status = 0;
              
             }else { 
                commande[0].status = 1;
             }
          })
          commande[0].save();
        
    }, 3500);




     
         if (commandes) {
          
            return res.status(200).json(commandes);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {

        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.commandesTraiteesByDistributeur = async function(req, res){
    try{
       let userId= req.params.id
       let commandes = await Commande.find({"status": 1,"user_id": userId}).sort({"createdAt": -1}).populate('user_id').populate({
        path: "panier.produit_id", 
        populate: {
           path: "categorie_id" 
        },
        
       }).populate ({
           path: "panier.zone_id", 
           populate: {
              path: "commune_id" 
           }, 
        });

         if (commandes) {
          
            return res.status(200).json(commandes);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.AllCommandeAttenteLivraisons = async function(req, res){
    let id = 0;
     try{
         let commandes = await Commande.find({"status":id}).sort({"createdAt": -1}).populate('user_id').populate({
             path: "panier.produit_id", 
             populate: {
                path: "categorie_id" 
             },
             
            }).populate ({
                path: "panier.zone_id", 
                populate: {
                   path: "commune_id" 
                }, 
             })
             ;
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 
 module.exports.PaginatedCommandeAttenteDistributeurTraite = async function(req, res){
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
         return res.status(500).send(new Error('Server Error...'))
     }
  
 }
 module.exports.paginatedCommandeAttenteForDistributeurBank = async function(req, res){
    
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
            }
        }
        let commandes = await Commande.paginate({"status":0,"societe":req.params.id}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

 module.exports.paginatedCommandeAttenteForDistributeur = async function(req, res){
    
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
            }
        }
        let commandes = await Commande.paginate({"status":0}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.paginatedCommandeTraiteForDistributeurBank = async function(req, res){
    
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
            }
        }
        let commandes = await Commande.paginate({"status":1,"societe":req.params.id}, options)
         
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.paginatedCommandeTraiteForDistributeurBanki = async function(req, res){
    
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
     }
 }

 module.exports.paginatedCommandeAttenteForDistributeurBanque = async function(req, res){
    
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
                path: 'client_id'
            },
            populate:{
                path: 'panier.zone_id',
                populate: {
                    path: "commune_id" 
                 },
                 
            },
            sort:{
                createdAt: '-1'
            },
        }

        let commandes = await Commande.paginate({"status":0,"user_id":req.params.id}, options)
         console.log("barry 00 ",commandes)
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


 
 module.exports.paginatedCommandeTraiteForDistributeurBanki = async function(req, res){
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
     }
  
 }
 module.exports.paginatedCommandeTraiteForDistributeur = async function(req, res){
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
            }
            
        }
        let commandes = await Commande.paginate({"status":1,"user_id":req.params.id}, options)
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
  
 }

 module.exports.paginatedCommandeAllTraiteForDistributeur = async function(req, res){
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
            }
            
        }
        let commandes = await Commande.paginate({"status":1,"user_id":req.params.id}, options)
        if (commandes) {
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
  
 }

 module.exports.PaginatedAllCommandeTraiteLivraisons = async function(req, res){
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
        console.log("error", error)
         return res.status(500).send(new Error('Server Error...'))
     }
  }
 module.exports.PaginatedAllCommandeAttenteLivraisons = async function(req, res){
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
      let commandes = await Commande.paginate({"status":0}, options)
       
      if (commandes) {
           return res.status(200).json(commandes);
           
       } else {
           return res.status(404).send(new Error('Erreur 404...'))
       }
   } catch (error) {
      console.log("error", error)
       return res.status(500).send(new Error('Server Error...'))
   }
}



module.exports.AllCommandeAttenteLivraison = async function(req, res){
    let id = req.params.id;
 
     try{
         let commandes = await Commande.find({"_id":id}).sort({"createdAt": -1}).populate('user_id').populate({
             path: "panier.produit_id", 
             populate: {
                path: "categorie_id" 
             }
            })
            .populate ({
                path: "panier.zone_id", 
                populate: {
                   path: "commune_id" 
                }, 
             })
             .populate({
                path: 'panier',
                populate: { path:  'etape',
                model: 'Statut' }
             })
             ;
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.AllCommandeAttenteDistributeurTraiteById= async function(req, res){
    let user_id = req.params.id;
 
   
    let id = 0
        try{
            let commandes = await Commande.find({"_id":user_id}).sort({"createdAt": -1}).populate('user_id')
                
              
             if (commandes) {
              
                return res.status(200).json(commandes);
                
            } else {
                return res.status(404).send(new Error('Erreur 404...'))
            }
        } catch (error) {
            return res.status(500).send(new Error('Server Error...'))
        }
 }
 module.exports.AllCommandeAttenteDistributeurTraite= async function(req, res){
    let user_id = req.params.id;
 
     try{
         let commandes = await Commande.find({"status":1,"user_id":user_id}).sort({"createdAt": -1}).populate('user_id');
             ;
            
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 

module.exports.AllCommandeAttenteDistributeur = async function(req, res){
    let user_id = req.params.id;
 let id = 0
     try{
         let commandes = await Commande.find({"_id":user_id}).sort({"createdAt": -1}).populate('user_id')
             
           
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.listeCommandeClient = async function(req, res){
   let user=req.payload._id;
   console.log("moi",user);
    try{
        let commandes = await Commande.find({"delete":0,"user_id":user}).sort({"createdAt": -1}).populate('client_id').populate('user_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
console.log(commandes);
         if (commandes) {
          
            return res.status(200).json(commandes);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.notification= async function(req, res){

//    id = req.params.id;
  //  let user=req.payload._id;
      let notif_token = req.body.notif_token;
      let status = req.body.status;
    //console.log("mon id",id);
    try{

        let commande = await Commande.find({"notif_token":notif_token}).populate('produit_id').populate('client_id');
        commande[0].status_pay = status;
        commande[0].save();
         if(commande[0]) {
            return res.status(200).json(commande[0]);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.checkPositionStatusByCommande = async function(req, res, next){
    let status= false
    try{
      Position.find({"panier": req.params.id})
             .then(position=> {
                let tab= position.filter(data=>data.status==1)
                if (tab.length == position.length) {
                    status= true
                }
                res.status(200).json(status)
             })
             .catch(error=> res.status(400).json(error))
    
  //        }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
  }

  

  module.exports.rejeterPackage = async function(req, res){
    
    let id_commande = req.params.commande_id;
    try{
  
     let commandes = await Commande.find({"status": 0,"_id": id_commande}).sort({"createdAt": -1});
     console.log("commande avant",commandes);
     commandes[0].panier.forEach(resulte => {
     
          resulte.approuve = 2;
        
       
    })
    commandes[0].approuve = 2;
    commandes[0].status = 1;
    commandes[0].save();
 
    var nodemailer = require('nodemailer');
    let societe = ""
      // Create the transporter with the required configuration for Gmail
      // change the user and pass !
      var transporter = nodemailer.createTransport({
          host: 'mail49.lwspanel.com',
          port: 465,
          secure:true,
          pool: true,
            tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
    },
            // use SSL
          auth: {
              user: 'bella@bankitruck.com',
              pass: '1@Innovons'
          }
      });
      let user = await User.find();
    user.forEach(result => {

      
       result.roles.forEach(results =>{
         if(results.role == 'Sadmin' ){
          
          // setup e-mail data                                                                                      
   var mailOptions = {                                                                                       
     from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
     to: result.email, // list of receivers (who receives)                                     
     subject: 'Commande', // Subject line                                                                  
     text: 'Bonjour  le dossier ' + commandes[0].refrence + ' a été rejeté merci de vous connecter sur \n'+ 'www.admin.bankitruck.com' // plaintext body 
     };                                                                                                        
                                                                                                       
     // send mail with defined transport object                                                                
     transporter.sendMail(mailOptions, function(error, info){                                                  
     if(error){                                                                                            
     return console.log(error);                                                                        
     }                                                                                                     
                                                                                                       
     console.log('Message sent: ' + info.response);                                                        
     });  
   
   
       }
      
        })
      
      
    });







          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
        
         return res.status(500).send(new Error('Server Error...'))
     }
    }

  module.exports.validerPackage = async function(req, res){
   
    let id_commande = req.params.commande_id;
    try{
    let commande = await Commande.find({"_id":id_commande});
     commande[0].panier.forEach(result => {
       
            result.approuve = 1;
           
            result.save();
           
       
     });
     commande[0].approuve = 1
     commande[0].save();
     var nodemailer = require('nodemailer');
     let societe = ""
       // Create the transporter with the required configuration for Gmail
       // change the user and pass !
       var transporter = nodemailer.createTransport({
           host: 'mail49.lwspanel.com',
           port: 465,
           secure:true,
           pool: true,
             tls: {
     // do not fail on invalid certs
     rejectUnauthorized: false,
     },
             // use SSL
           auth: {
               user: 'bella@bankitruck.com',
               pass: '1@Innovons'
           }
       });
       let user = await User.find();
     user.forEach(result => {

       
        result.roles.forEach(results =>{
          if(results.role == 'Sadmin' ){
           
           // setup e-mail data                                                                                      
    var mailOptions = {                                                                                       
      from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
      to: result.email, // list of receivers (who receives)                                     
      subject: 'Commande', // Subject line                                                                  
      text: 'Bonjour  le dossier ' + commande[0].refrence + ' a été validé merci de vous connecter sur \n'+ 'www.admin.bankitruck.com' // plaintext body 
      };                                                                                                        
                                                                                                        
      // send mail with defined transport object                                                                
      transporter.sendMail(mailOptions, function(error, info){                                                  
      if(error){                                                                                            
      return console.log(error);                                                                        
      }                                                                                                     
                                                                                                        
      console.log('Message sent: ' + info.response);                                                        
      });  
    
    
        }
       
         })
       
       
     });





          if (commande) {
           
             return res.status(200).json(commande);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
    }




module.exports.addLivraison= async function(req, res){
    let id_commande = req.params.id_commande;
    let id_panier = req.params.id_panier;
    try{
        // let commande = Commande.insertMany(req.body);
          //let user=req.payload._id;
    let commande = await Commande.find({"_id":id_commande});
            
     
 commande[0].panier.forEach(result => {
        if(result._id == id_panier){
            result.transporte_id = req.body.transporte_id;
            //result.quantite = 12
            //result.quantite_livrer =0
            result.quantite = parseInt(result.quantite) - parseInt(req.body.quantite_livrer);
            result.quantite_livrer = parseInt(result.quantite_livrer) + parseInt(req.body.quantite_livrer) ;
            result.status = 1;
            result.save();
           //result.save();
        }
        if( result.quantite == 0)
        {  
            commande[0].status = 2;  
        }else
        {  
            commande[0].status = 0;  
        }



       
     });
     
     commande[0].save();

          if (commande) {
           
             return res.status(200).json(commande);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
    }
module.exports.addCommandes = async function (req, res) {
   
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
          let today  = new Date();
         let da=today.toLocaleDateString("fr-FR", options);
var livraison = "LIVRAISON"; 
 var commande = new Commande();
 let commandes = await Commande.find({})
 let nbZone = commandes.length;
 let n ="CO/AG2023/00";
 let nb = n+nbZone;
  commande.user_id = req.body.user_id;
  commande.montantTotal = req.body.montantTotal;
  commande.refrence = nb;
  commande.date_commande = da,
  commande.societe = req.body.societe,
  commande.agence_name = req.body.agence_name,
  commande.agence_telephone = req.body.agence_telephone,
  commande.client_id = req.body.client_id,
  console.log("panier bella",req.body.panier)
  req.body.panier.forEach(result => {
    var object = {
        client: result.client,
        produit_id: result.produit_id ,
        observationBanki : result.observationBanki ,
        passport_id: result.passport_id ,
        passport_libelle: result.passport ,
        quantite:result.quantite,
        zone:result.zone,
        zone_id:result.zone_id,
        categorie_libelle: result.categorie_libelle,
        produit_libelle: result.produit_libelle,

        montant: result.montant ,

    };
    commande.panier.push(object);
 
 });
 commande.save();
 var nodemailer = require('nodemailer');
 var transporter = nodemailer.createTransport({
    host: 'mail49.lwspanel.com',
    port: 465,
    secure:true,
    pool: true,
      tls: {
// do not fail on invalid certs
rejectUnauthorized: false,
},
      // use SSL
    auth: {
        user: 'bella@bankitruck.com',
        pass: '1@Innovons'
    }
});

 let user = await User.find();
 user.forEach(result => {

   if(result._id == req.body.user_id) {

     var mailOptions = {                                                                                       
       from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
       to: result.email, // list of receivers (who receives)                                     
       subject: 'Accusé de reception', // Subject line                                                                  
       text: 'Bonjour nous avons reçu votre dossier ' // plaintext body 
       };                                                                                                        
                                                                                                         
       // send mail with defined transport object                                                                
       transporter.sendMail(mailOptions, function(error, info){                                                  
       if(error){                                                                                            
       return console.log(error);                                                                        
       }                                                                                                     
                                                                                                         
       console.log('Message sent: ' + info.response);                                                        
       });  
     

   }


   console.log("utilisateur barry",result.email)
   result.roles.forEach(results =>{
     if(results.role == 'Sadmin' && result._id != req.body.user_id){
       console.log("utilisateur barry",result.email)
      // setup e-mail data                                                                                      
var mailOptions = {                                                                                       
 from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
 to: result.email, // list of receivers (who receives)                                     
 subject: 'Commande', // Subject line                                                                  
 text: 'Bonjour vous avez reçu un nouveau dossier ' // plaintext body 
};                                                                                                        
                                                                                                   
 // send mail with defined transport object                                                                
 transporter.sendMail(mailOptions, function(error, info){                                                  
 if(error){                                                                                            
 return console.log(error);                                                                        
 }                                                                                                     
                                                                                                   
 console.log('Message sent: ' + info.response);                                                        
 });  


   }
   if(results.role == 'Banque' && result._id != req.body.user_id){
     console.log("utilisateur barry",result.email)
    // setup e-mail data                                                                                      
var mailOptions = {                                                                                       
from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
to: result.email, // list of receivers (who receives)                                     
subject: 'Commande', // Subject line                                                                  
text: 'Bonjour vous avez reçu un nouveau dossier ' // plaintext body 
};                                                                                                        
                                                                                                 
// send mail with defined transport object                                                                
transporter.sendMail(mailOptions, function(error, info){                                                  
if(error){                                                                                            
return console.log(error);                                                                        
}                                                                                                     
                                                                                                 
console.log('Message sent: ' + info.response);                                                        
});  


 }
    })
  
  
});
        
  if (commande) {


  return res.status(200).json(commande);
 
}

}
module.exports.addCommande = async function(req, res){

 try{
       let carte = await Carte.find({"identifiant":req.body.identifiant,"active":1});
       let produit = await Produit.find({"_id":req.body.produit_id}).populate('categorie_id');
      let identifiant = req.body.identifiant;              
      if(req.body.identifiant == 0){
          let commandes = Commande.insertMany(req.body);
               if (commandes) {
                 
                return res.status(200).json(commandes);
            
               } else {
               return res.status(404).send(new Error('Erreur 404...'))
                }        


      }else if(carte[0]){
             
            carte[0].produit.forEach(result => {
                
                              
       
                if( produit[0].categorie_id?.nom == result.categorie_id  ){
                   // deuxieme condition 
                           if(carte[0].quantites_restant >= req.body.quantite ){
                               let commande = Commande.insertMany(req.body);
                                  return res.status(200).json(commande);
 
                           }else if(req.body.quantite > carte[0].quantites_restant )  {
                            
                             return res.status(203).json({
                    "error": "cette quantité est incorrecte",
                    "status": 203
                            });	
                           }
               }else if(carte[0].quantites_restant >= req.body.quantite){
       
                         if(produit[0].categorie_id?.nom == result.categorie_id){
             let commande = Commande.insertMany(req.body);
            return res.status(200).json(commande);
            }
          }

                            
                
             

                                  

               
             });
            
         }else if(!carte[0]){
              return res.status(202).json({
                        "error": "carte non valide ",
                        "status": 202
                    });
             }
  
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}
module.exports.commandeClientById = async function(req, res){

  let user=req.payload._id;    
    try{
       // let commande = Commande.insertMany(req.body);
         //let user=req.payload._id;
let commande = await Commande.find({"status":1,"status_relation":2,"delete":0,"valider":0,"user_id":user}).sort({"createdAt": -1}).populate('client_id').populate('user_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
        console.log('bella');
         if (commande) {
          
            return res.status(200).json(commande);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.listeCommande = async function(req, res){
   let user=req.payload._id;
   let pay='0';
    try{
        let commandes = await Commande.find({"status": 0,"status_pay":pay,"delete":0,"client_id":user}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
         if (commandes) {
          
            return res.status(200).json(commandes);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.listeComman = async function(req, res){
   let user=req.params.id;
   let pay='0';
    try{
        let commandes = await Commande.find({"status": 0,"status_pay":pay,"delete":0,"client_id":user}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
         if (commandes) {

            return res.status(200).json(commandes);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.listeCommandeTraite = async function(req, res){
    let user=req.payload._id;
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":0,"valider":2,"client_id":user}).sort({"createdAt": -1}).populate('produit_id').populate('client_id');
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
    }

module.exports.listesCommandeTraite = async function(req, res){
    let user=req.params.id;
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":0,"valider":2,"client_id":user}).sort({"createdAt": -1}).populate('produit_id').populate('client_id');
          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
    } 
module.exports.listeCommandeAttente = async function(req, res){
    let user=req.payload._id;
     try{
         let commandes = await Commande.find({"status":1,"status_relation":2,"delete":0,"valider":0,"client_id":user}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
module.exports.listesCommandeAttente = async function(req, res){
    let user=req.params.id;
     try{
         let commandes = await Commande.find({"status":1,"status_relation":2,"delete":0,"valider":0,"client_id":user}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
          if (commandes) {

             return res.status(200).json(commandes);

         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.listeCommandeFourni = async function(req, res){
    let id=req.payload._id;
     try{
        let commandes = await Mise.find({"client_id":id,"status":7,"livrer":0,"delete":0}).sort({"createdAt": -1}).populate({
            path: "commande_id", 
            populate: {
               path: "produit_id",
              populate: {
              path: "categorie_id"    
              }
            }
           
         }).populate({
            path: "commande_id", 
           
            populate: {
                path: "product_id" 
             }
         });

          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.listeCommandeFourniTraite = async function(req, res){
    let id=req.payload._id;
     try{
        let commandes = await Mise.find({"client_id":id,"livrer":5,"delete":0}).sort({"createdAt": -1}).populate({
            path: "commande_id", 
            populate: {
               path: "produit_id" 
            }
           
         }).populate({
            path: "commande_id", 
           
            populate: {
                path: "product_id" 
             }
         });

          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.listeCommandeFournisseur = async function(req, res){
    let id=req.payload._id;
     try{
        let commandes = await User.find({"_id":id}).populate({
            path: "valide.commande_id", 
            populate: {
               path: "produit_id" 
            },           
         }).populate({
            path: "valide.commande_id", 
           
            populate: {
                path: "zone_id" 
             }
         });

          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

 module.exports.AllCommandeAttente= async function(req, res){
    let user=req.payload._id;
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":0,"status":1}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.AllCommandeTraite= async function(req, res){
    let user=req.payload._id;
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":0,"status":7}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 module.exports.AllCommandeFournisseur= async function(req, res){
    let user=req.payload._id;
     try{
         let commandes = await Commande.find({"status_relation":2,"delete":0,"status":5}).sort({"createdAt": -1}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
          if (commandes) {
           
             return res.status(200).json(commandes);
             
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
module.exports.cancelCommande = async function(req, res){
    id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id});
        commande[0].delete = 1;

        commande[0].save();
//console.log("bella",commande[0]);
         if (commande[0]) {
            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getCommandeById = async function(req, res){
    let id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id,"delete":0}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });;
       console.log(commande);
         if (commande) {
            return res.status(200).json(commande);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getCommandeByIds = async function(req, res){
    let id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id,"delete":0}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });
       console.log(commande);
         if (commande) {
            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.livrerCommandeManquante = async  function(req, res){
    let commande =  await Commande.find({"_id":req.body.commandeId});

    commande[0].panier.forEach(resulte => {
      if(resulte._id == req.body.produit_panier_Id){
        resulte.status = 1;
        resulte.save();
       }
    })
    commande[0].save(({ suppressWarning: true })) 

    setTimeout(async () => {
    let laligneCommande =  await Commande.find({"_id":req.body.commandeId});
    let lePanier=  laligneCommande[0].panier
    let panierFiltreParStatut= lePanier.filter(data=> data.status==1)
    if(lePanier.length == panierFiltreParStatut.length){
        laligneCommande[0].status = 1
        
        laligneCommande[0].save()
  }
}, 3500);


   
  }
  
module.exports.relationCommandes = async function(req, res){
    var id = req.body.id;
    var montant = req.body.montant;
    var id_commande = req.body.id_commande;
    
   var montant_fournisseur = req.body.montant_fournisseur;
    var id_stock = req.body.id_stock;
   console.log("id",id);
   console.log("id_commande",id_commande);
   console.log("id_stock",id_stock);

  
   try{
    let commande = await Commande.find({"_id": id_commande}).populate('produit_id').populate({
        path: "produit_id", 
        populate: {
           path: "categorie_id" 
        }
       });

    let stock = await Stock.find({"_id": id_stock});
     stock[0].quantite =  stock[0].quantite - commande[0].quantite;
     stock[0].save();
    var object = {
        client_id: id,
        commande_id: id_commande,
        status:7
    };

    Mise.insertMany(object);
    //let user = await User.find({"_id": id});
   
   
  

  
    commande[0].redicat = montant ;
  //  commande[0].avance_demander = montant_demander ;
    commande[0].status = 5;
    commande[0].montant_fournisseur = req.body.montant_fournisseur;
    commande[0].client_reste_payer =  commande[0].montantTotal;
    commande[0].reste_payer_fournisseur = montant;
    commande[0].user_id = id;
    commande[0].save();
    //let role = "Facturation"
    //let user = await User.find({"role": role});

  //return res.status(200).json(commande[0]);
        if ( commande[0]) {
            let user = await User.find({"_id": id});
            let name = user[0].name;
            let tel = user[0].tel;
              let types = commande[0].produit_id?.type;
              let marques = commande[0].produit_id.categorie_id?.nom;
            const options = {
                authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                area_code:"+224", // String; Telephony code of your country Ex: +237
                sender_number: tel, // Number; The number to which you are sending a message without area code
                sender_phone: tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                sms_body: "Bonjour Mr/Mm " + name + " " + " vous avez reçu une commande de "+ marques + " " +types+ " veillez vous connecter dans votre compte fournisseur pour plus de details.\n" + "infoline : 627153434" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
              };
              const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                    orangeSms(options)
                    .then((responseOrangeSms)=>{
                      console.log(responseOrangeSms); 
                    
                    }).catch((error)=>{
                      console.log(error);
                    });
          return res.status(200).json(commande[0]);
           
          
  
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
}

module.exports.CommandeFournisseur= async function(req, res){
    let fournisseur_id = req.params.id;
   
   try{

       let relation = await Mise.find({"client_id": fournisseur_id});
       let commande = await Commande.find({"_id":relation[0].commande_id}).populate({
        path: "produit_id",
        populate: {
           path: "categorie_id"
        }
       });
      

        if (commande) {
          return res.status(200).json(commande);
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
}
module.exports.revoqueCommandes= async function(req, res){
    let id_commande = req.params.id;
    let id_user = req.params.id_user;
   console.log("id",id_commande);
   console.log("id_user",id_user);


   try{

       let relation = await Mise.find({"client_id": id_user,"delete": 0,"status":6});
       let commande = await Commande.find({"_id": id_commande});
       commande[0].status = 1;
       commande[0].save();
       
       relation[0].delete = 1;
       relation[0].save();

        if (relation[0]) {
          return res.status(200).json( relation[0]);
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
}

module.exports.ViewRelation = async function(req, res){
    var id = req.params.id;
    
   console.log("mon id",id);
  


   try{

      
       let commande = await Mise.find({"commande_id":id}).populate('client_id').populate('commande_id');
    

if ( commande) {
          return res.status(200).json(commande);
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
}
module.exports.relationCommande = async function(req, res){
     var id = req.params.id;
     var id_commande = req.params.id_commande;
    console.log("id",id);
    console.log("id_commande",id_commande);


    try{

        let user = await User.find({"_id": id});
        let commande = await Commande.find({"_id": req.params.id_commande});
        commande[0].status = 5;
        commande[0].save();
        user[0].valide.commande_id.push(id_commande);
        user[0].save();

         if ( user[0]) {
           return res.status(200).json(user[0]);
       } else {
           return res.status(404).send(new Error('Erreur 404...'))
       }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.attenteCommande = async function(req, res){
    id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id});
        commande[0].status = 3;

        commande[0].save();

         if (commande[0]) {
            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.livrerCommande = async function(req, res){
    id = req.params.id;
//    let user=req.payload._id;
    let status_pay ="LIVRAISON";
    console.log("mon id",id);
    try{
        let commande = await Commande.find({"_id": id}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });

          let commandes = await Commande.find({"_id": id}).populate('client_id').populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });

        if(commande[0].produit_id?.status == 1)
       { 
          let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
          let today  = new Date();
         let da=today.toLocaleDateString("fr-FR", options);
        let telephone=commande[0].telephone;
        let nom=commande[0].nom;
        let prenom=commande[0].prenom;
        let quantite=commande[0].quantite;
        let re ="COOO";
        let e = "/AG/2022";
      let command = await Commande.find({"references": 0});
         command[0].reference = command[0].reference + 1;
         command[0].save(); 
        commande[0].identification  = re+command[0].reference+e;
        let type=commande[0].produit_id?.type;
        let marque=commande[0].produit_id.categorie_id?.nom;
        commande[0].status = 1;
         commande[0].status_pay = status_pay;
        commande[0].commission = quantite*2000;
        commande[0].status_relation = 2;
        commande[0].save();
         options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: telephone, // Number; The number to which you are sending a message without area code
            sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme " + prenom + " " + nom + " votre commande  " + marque + " "+" a été prise en charge et la livraison se fera très rapidement.\n"+"Bankitruck, votre E-comerce d’agregat.\n"+"www.bankitruck.com.\n"+"infoline : 627173434" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms); 
                
                }).catch((error)=>{
                  console.log(error);
                });
      }else{
          
    var object = {
        client_id:commande[0].produit_id?.distributeur_id ,
        commande_id: commande[0]._id,
        status_fournisseur:1,
       status:7
      
    };


    Mise.insertMany(object);   
 // commande[0].redicat = montant ;
  // commande[0].avance_demander = montant_demander ;
    commandes[0].status = 1;
     commandes[0].status_relation = 2;
   // commande[0].client_reste_payer =  commande[0].montantTotal;
 //   commande[0].reste_payer_fournisseur = montant;
   // commande[0].user_id = id;
    commandes[0].save();       

           }
        
         if (commande[0]) {
            let type=commande[0].produit_id.type;
            let marque=commande[0].produit_id.categorie_id?.nom;
      options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: 610006313, // Number; The number to which you are sending a message without area code
            sender_phone: 610006312, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour vous avez re�u une nouvelle commande veillez vous connectez sur la plateforme "  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms); 
                
                }).catch((error)=>{
                  console.log(error);
                });

              option = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: 610006319, // Number; The number to which you are sending a message without area code
            sender_phone: 610006312, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour vous avez recu une nouvelle commande veillez vous connectez sur la plateforme "  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(option)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });
           optio = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: 610009315, // Number; The number to which you are sending a message without area code
            sender_phone: 610006312, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour vous avez recu une nouvelle commande veillez vous connectez sur la plateforme "  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(optio)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });
               opti = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: 620320003, // Number; The number to which you are sending a message without area code
            sender_phone: 610006312, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour vous avez recu une nouvelle commande veillez vous connectez sur la plateforme "  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(opti)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });


           var nodemailer = require('nodemailer');

            // Create the transporter with the required configuration for Gmail
            // change the user and pass !
            var transporter = nodemailer.createTransport({
                host: 'mail49.lwspanel.com',
                port: 465,
                secure:true,
                pool: true,
                  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
                  // use SSL
                auth: {
                    user: 'contact@bankitruck.com',
                    pass: '1@Innovons'
                }
            });

// setup e-mail data                                                                                      
  var mailOptions = {                                                                                       
      from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
      to: 'agregat@bankitruck.com', // list of receivers (who receives)                                     
      subject: 'Commande', // Subject line                                                                  
      text: 'Bonjour Bankitruck vous avez reçu une nouvelle commande '+ marque + ' '+type // plaintext body 
  };                                                                                                        
                                                                                                            
  // send mail with defined transport object                                                                
  transporter.sendMail(mailOptions, function(error, info){                                                  
      if(error){                                                                                            
          return console.log(error);                                                                        
      }                                                                                                     
                                                                                                            
      console.log('Message sent: ' + info.response);                                                        
  });                  
             
            return res.status(200).json(commande[0]);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.livraisonCommandes = async function(req, res){
    let id = req.body.id;
    let commentaire = req.body.commentaire;
    let id_user=req.body.id_user;
    console.log("id",id);
   console.log("user",id_user);

    try{
        let commande = await Commande.find({"_id": id}).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id');
        let commandes = await Mise.find({"client_id": id_user});
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        let today  = new Date();
       let da=today.toLocaleDateString("fr-FR", options);

       let fournisseur = await User.find({"_id": commandes[0].client_id});
        fournisseur[0].quantite = fournisseur[0].quantite + commande[0].quantite;
        fournisseur[0].montant_total = fournisseur[0].montant_total + commande[0].montant_fournisseur;
        fournisseur[0].save();
       commande[0].date = da;
        commande[0].status = 7;
        commande[0].commentaire = commentaire;
        commande[0].valider = 2;
        commande[0].save();
        commandes[0].valider = 1;
        commandes[0].save();
      
         if (commande[0]) {
        if(commande[0].product_id){
            
            let nom=commande[0].nom;
            let telephone=commande[0].telephone;
            const options = {
                authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                area_code:"+224", // String; Telephony code of your country Ex: +237
                sender_number: telephone, // Number; The number to which you are sending a message without area code
                sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                sms_body: "Bonjour Mr/Mme " + nom + " " + " BANKITRUCK vous remercie pour la confiance.\n" + "Vous pouvez toujours contunier a commander via le " + " www.bankitruck.com, 627153434 ou dans un point de distribution."  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
              };
              const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                    orangeSms(options)
                    .then((responseOrangeSms)=>{
                      console.log(responseOrangeSms); 
                    
                    }).catch((error)=>{
                      console.log(error);
                    });
            return res.status(200).json(commandes[0]);  
         }else{
            let prenom=commande[0].prenom;
        
            let nom=commande[0].nom;
            
            let name=commande[0].client_id.name;
           
            let telephone=commande[0].telephone;
            let tel=commande[0].client_id.tel;
             options = {
                authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                area_code:"+224", // String; Telephony code of your country Ex: +237
                sender_number: telephone, // Number; The number to which you are sending a message without area code
                sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                sms_body: "Bonjour Mr/Mme " + nom + " " + prenom + " " + " BANKITRUCK vous remercie pour la confiance.\n" + "Vous pouvez toujours contunier a commander via le " + " www.bankitruck.com, 627153434 ou dans un point de distribution."  // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
              };
               orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                    orangeSms(options)
                    .then((responseOrangeSms)=>{
                      console.log(responseOrangeSms); 
                    
                    }).catch((error)=>{
                      console.log(error);
                    });
                     options = {
                        authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                        area_code:"+224", // String; Telephony code of your country Ex: +237
                        sender_number: tel, // Number; The number to which you are sending a message without area code
                        sender_phone: tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                        sms_body: "Bonjour Mr/Mme " + name + " " + " la commande de " + nom + " " + prenom +" a été livre(e) avec succes"    // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                      };
                     orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                            orangeSms(options)
                            .then((responseOrangeSms)=>{
                              console.log(responseOrangeSms); 
                            
                            }).catch((error)=>{
                              console.log(error);
                            });
            return res.status(200).json(commandes[0]);
            
         }
         
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.livraisonCommandeFournisseur = async function(req, res){
    //let id = req.params.id;
    let id_user=req.body.id_user;
    let id = req.body.id;
    
   // let id_user = req.body.id_user;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
 let today  = new Date();
let da=today.toLocaleDateString("fr-FR", options);

  //let date=Date.now;

    try{
        let commande = await Commande.find({"_id": id_user}).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id');
        let commandes = await Mise.find({"_id":id});
        
        
        // let name=commande[0].client_id.name;
        // let tel=commande[0].client_id.tel;
        let quantite=commande[0].quantite;
        commandes[0].status = 6;
        commandes[0].livrer = 5;
        commandes[0].date = da;
        //commande[0].date = Date.now;
        commandes[0].save();
      commande[0].livrer = 4;
commande[0].status = 5;
commande[0].status_relation = 2;
      commande[0].date = da;
      commande[0].status_livrer = 1;
      //commande[0].status = 8;
      //commande[0].date = Date.now;
       commandes[0].date = da;
      commande[0].save();
         if (commandes[0]) {
             if(commande[0].product_id){
               
                let marques=commande[0].product_id.categorie_id?.nom;
                let telephone_chuaffeur= req.body.telephone;
                let telephone=commande[0].telephone;
                let nom=commande[0].nom;
                const options = {
                    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                    area_code:"+224", // String; Telephony code of your country Ex: +237
                    sender_number: telephone, // Number; The number to which you are sending a message without area code
                    sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                    sms_body: "Bonjour Mr/Mme" + nom + " " + " " + " votre commande " + marques + " est encours de livraison le " + telephone_chuaffeur + " est le contact du livreur\n" +"Bankitruck,votre E-commerce d'agregat.\n"+ "www.bankitruck.com"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                  };
                  const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                        orangeSms(options)
                        .then((responseOrangeSms)=>{
                          console.log(responseOrangeSms); 
                        
                        }).catch((error)=>{
                          console.log(error);
                        });
                        const optionss = {
                            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                            area_code:"+224", // String; Telephony code of your country Ex: +237
                            sender_number:telephone_chuaffeur, // Number; The number to which you are sending a message without area code
                            sender_phone: telephone_chuaffeur, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                            sms_body: "Bonjour Mr/Mme" +" le " + telephone + " est le contact du client ("+ nom + ")"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                          };
                          const orangeSmss = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                                orangeSms(optionss)
                                .then((responseOrangeSms)=>{
                                  console.log(responseOrangeSms); 
                                
                                }).catch((error)=>{
                                  console.log(error);
                                });
                return res.status(200).json(commandes[0]);  
             }else{
                let prenom=commande[0].prenom;
                let type=commande[0].produit_id.type;
                let marque=commande[0].produit_id.categorie_id?.nom;
                let nom=commande[0].nom;
                let telephone_chuaffeur= req.body.telephone;
                let telephone=commande[0].telephone;
                const options = {
                    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                    area_code:"+224", // String; Telephony code of your country Ex: +237
                    sender_number: telephone, // Number; The number to which you are sending a message without area code
                    sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                    sms_body: "Bonjour Mr/Mme" + nom + " " + prenom + " " + " votre commande " + marque + " est encours de livraison le " + telephone_chuaffeur + " est le contact du livreur\n" +"Bankitruck,votre E-commerce d'agregat.\n"+"www.bankitruck.com"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                  };
                  const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                        orangeSms(options)
                        .then((responseOrangeSms)=>{
                          console.log(responseOrangeSms); 
                        
                        }).catch((error)=>{
                          console.log(error);
                        });
                        const optionss = {
                            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                            area_code:"+224", // String; Telephony code of your country Ex: +237
                            sender_number:telephone_chuaffeur, // Number; The number to which you are sending a message without area code
                            sender_phone: telephone_chuaffeur, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                            sms_body: "Bonjour Mr/Mme" +" le " + telephone + " est le contact du client ("+ prenom + " "+ nom + ")"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                          };
                          const orangeSmss = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                                orangeSms(optionss)
                                .then((responseOrangeSms)=>{
                                  console.log(responseOrangeSms); 
                                
                                }).catch((error)=>{
                                  console.log(error);
                                });
                return res.status(200).json(commandes[0]);
             }
           
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.livraisonCommandeFournisseurs = async function(req, res){
    //let id = req.params.id;
    let id_user=req.body.id_user;
    let id = req.body.id;
    
   // let id_user = req.body.id_user;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
 let today  = new Date();
let da=today.toLocaleDateString("fr-FR", options);

  //let date=Date.now;

    try{
        let commande = await Commande.find({"_id": id_user}).populate('client_id').populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
        let commandes = await Mise.find({"_id":id});
        
        
        // let name=commande[0].client_id.name;
        // let tel=commande[0].client_id.tel;
        let quantite=commande[0].quantite;
        commandes[0].status = 6;
        commandes[0].livrer = 5;
       // commandes[0].date = da;
        //commande[0].date = Date.now;
        commandes[0].save();
      commande[0].livrer = 2;
      commande[0].valider = 2;
      commande[0].date = da;
      commande[0].status_livrer = 1;
       commande[0].status_relation = 2;
       commande[0].status = 7;
      //commande[0].date = Date.now;
       commande[0].date = da;
      commande[0].save();
         if (commandes[0]) {
             if(commande[0].user_id){
               
                let marques=commande[0].produit_id.categorie_id?.nom;
                let telephone_chuaffeur= req.body.telephone;
                let telephone=commande[0].telephone;
                let nom=commande[0].nom;
                const options = {
                    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                    area_code:"+224", // String; Telephony code of your country Ex: +237
                    sender_number: telephone, // Number; The number to which you are sending a message without area code
                    sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                    sms_body: "Bonjour Mr/Mme" + nom + " " + " " + " votre commande " + marques + " est encours de livraison le " + telephone_chuaffeur + " est le contact du livreur\n" +"Bankitruck,votre E-commerce d'agregat.\n"+ "www.bankitruck.com"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                  };
                  const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                        orangeSms(options)
                        .then((responseOrangeSms)=>{
                          console.log(responseOrangeSms); 
                        
                        }).catch((error)=>{
                          console.log(error);
                        });
                        const optionss = {
                            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                            area_code:"+224", // String; Telephony code of your country Ex: +237
                            sender_number:telephone_chuaffeur, // Number; The number to which you are sending a message without area code
                            sender_phone: telephone_chuaffeur, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                            sms_body: "Bonjour Mr/Mme" +" le " + telephone + " est le contact du client ("+ nom + ")"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                          };
                          const orangeSmss = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                                orangeSms(optionss)
                                .then((responseOrangeSms)=>{
                                  console.log(responseOrangeSms); 
                                
                                }).catch((error)=>{
                                  console.log(error);
                                });
                return res.status(200).json(commandes[0]);  
             }else{
                let prenom=commande[0].prenom;
                let type=commande[0].produit_id.type;
                let marque=commande[0].produit_id.categorie_id?.nom;
                let nom=commande[0].nom;
                let telephone_chuaffeur= req.body.telephone;
                let telephone=commande[0].telephone;
                const options = {
                    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                    area_code:"+224", // String; Telephony code of your country Ex: +237
                    sender_number: telephone, // Number; The number to which you are sending a message without area code
                    sender_phone: telephone, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                    sms_body: "Bonjour Mr/Mme" + nom + " " + prenom + " " + " votre commande " + marque + " est encours de livraison le " + telephone_chuaffeur + " est le contact du livreur\n" +"Bankitruck,votre E-commerce d'agregat.\n"+"www.bankitruck.com"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                  };
                  const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                        orangeSms(options)
                        .then((responseOrangeSms)=>{
                          console.log(responseOrangeSms); 
                        
                        }).catch((error)=>{
                          console.log(error);
                        });
                        const optionss = {
                            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
                            area_code:"+224", // String; Telephony code of your country Ex: +237
                            sender_number:telephone_chuaffeur, // Number; The number to which you are sending a message without area code
                            sender_phone: telephone_chuaffeur, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
                            sms_body: "Bonjour Mr/Mme" +" le " + telephone + " est le contact du client ("+ prenom + " "+ nom + ")"     // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
                          };
                          const orangeSmss = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                                orangeSms(optionss)
                                .then((responseOrangeSms)=>{
                                  console.log(responseOrangeSms); 
                                
                                }).catch((error)=>{
                                  console.log(error);
                                });
                return res.status(200).json(commandes[0]);
             }
           
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.paypal = async function(req, res){
    let id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id});
      
         if (commande) {
            return res.status(200).json(commande);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.livraisonCommande = async function(req, res){
    id = req.params.id;
    try{
        let commande = await Commande.find({"_id": id});
        commande[0].status = 9;

        commande[0].save();

         if (commande[0]) {
            return res.status(200).json(commande[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.livraisonCommande = async function(req, res){
    id = req.params.id;
    try{
        const result = await Commande.aggregate([{$group: {
            _id: '1',
            viewsTotal: {$sum: '$views'}
          }}]);
          let viewsTotal = 0;
          if(result.length > 0) {
            viewsTotal += result[0].viewsTotal;
          }
          return viewsTotal;
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


