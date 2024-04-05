const Commande = require("../models/Commande")
const Position = require("../models/Position")
const StatutCommand= require("../models/statutProduitCommande")

module.exports.addStatutCommande = async  function(req, res){
      const  statutCommand= new StatutCommand()
      statutCommand.produit_panier_Id= req.body.produit_panier_Id
      statutCommand.statutId= req.body.statutId
      statutCommand.quantite= req.body.quantite
      statutCommand.position_id= req.body.position_id
      statutCommand.dateRenseigne= req.body.dateRenseigne
      statutCommand.heure= req.body.heure
      statutCommand.observations= req.body.observations
      statutCommand.save()
      .then(()=> res.status(201).json({message: "le statut a été renseigné avec succes"}))
      .catch(error=> res.status(400).json(error))

      let commande =  await Commande.find({"_id":req.body.commandeId})
      let position =  await Position.find({"_id":req.body.position_id});
      position[0].quantite_masquer = position[0].quantite_masquer - req.body.quantite;
      position[0].quantite_livrer = position[0].quantite_masquer;
      position[0].save(({ suppressWarning: true }));
      let StatusPosition =  await StatutCommand.find({"position_id":req.body.position_id})
     if(StatusPosition.length == 3)  
     {
      let positions =  await Position.find({"_id":req.body.position_id});
      positions[0].status = 1;
      positions[0].save();

      setTimeout(async () => {
        let allPositionsForAPanier =  await Position.find({"panier": req.body.produit_panier_Id})
        let filtredTab = allPositionsForAPanier.filter(data=>data.status==1)
        let qteTotaleLivrer = 0
        // la somme totale des quantités postionnées
        for(let j=0; j< filtredTab.length; j++){
          qteTotaleLivrer += filtredTab[j].quantite_livrer;
        }
        if(allPositionsForAPanier.length == filtredTab.length){
          
          commande[0].panier.forEach(resulte => {
              if(resulte._id == req.body.produit_panier_Id){ 
                resulte.quantite_livrer = qteTotaleLivrer;
                if( qteTotaleLivrer == resulte.quantite_positionner ){
                  resulte.status = 1;
                  resulte.save();
                 }
                 resulte.save();
              }
          })
          commande[0].save(({ suppressWarning: true }))  
        }

       

      }, 3500);
     

      setTimeout(async () => {
        let laligneCommande =  await Commande.find({"_id":req.body.commandeId});
        let lePanier=  laligneCommande[0].panier
        let panierFiltreParStatut= lePanier.filter(data=> data.status==1)
       
        if(lePanier.length == panierFiltreParStatut.length){
              laligneCommande[0].status = 1
              laligneCommande[0].save()
        }
      }, 4000);
    
      }
     
      
    

     
 
}





module.exports.getStatutByProduitId = async  function(req, res){
  StatutCommand.find({"produit_panier_Id": req.params.id}).populate('statutId')
  .then(statut=> res.status(200).json(statut))
  .catch(error=> res.status(400).json(error))
}

module.exports.getStatutByProduitIds = async function(req, res){
  StatutCommand.find({"position_id": req.params.id}).populate('statutId')
  .then(statut=> res.status(200).json(statut))
  .catch(error=> res.status(400).json(error))
}

module.exports.updateStatutCommande = function(req, res){
  StatutCommand.updateOne({_id: req.body.id}, {...req.body}, {_id: req.body.id})
  .then(()=> res.status(200).json({message: "Le statut a été modifié avec succes"}))
  .catch(error=> res.status(400).json(error))
  
  
}



module.exports.deleteStatutCommade = async function(req, res){
  let ligneAsupprimer= req.body.ligneAsupprimer

  try{
    StatutCommand.deleteOne({_id: ligneAsupprimer})
           .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
           .catch(error=> res.status(400).json(error))
  // StatutCommand.find({"_id": ligneAsupprimer}).populate('statutId')
  //   .then(data=>{
  //      Statut.find({ordre: data[0].statutId.ordre - 1})
  //        .then(statut=>{
  //        Commande.find({"_id": idCommande})
  //         .then(commande=>{

  //           commande[0].panier.forEach(result => {
  //             console.log()
  //             if(result._id == panierId){
                
  //                 result.etape= statut[0]._id
  //                 result.save();
  //             }
  //          });
  //          commande[0].save();
  //          StatutCommand.deleteOne({_id: ligneAsupprimer})
  //          .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
  //          .catch(error=> res.status(400).json(error))
  //         })
           
          
          
  //        })
  //   })
      // let commande = Commande.insertMany(req.body);
        //let user=req.payload._id;
  
//         if (commande) {
         
//            return res.status(200).json(commande);
           
//        } else {
//            return res.status(404).send(new Error('Erreur 404...'))
//        }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
  // StatutCommand.deleteOne({_id: req.params.id})
  // .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
  // .catch(error=> res.status(400).json(error))
}
