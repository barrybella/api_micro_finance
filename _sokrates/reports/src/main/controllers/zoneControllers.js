const Zone = require('../models/Zone');
const Chauffeure = require('../models/Chauffeure');
const Transporte = require('../models/Transporte');
const Camion = require('../models/Camion');
const Position = require('../models/Position');
const Commande = require('../models/Commande');
const Commune = require('../models/commune');
const User = require('../models/User');



module.exports.getCamionByCommande = async function(req, res){
    let id = req.params.id;

    try{
        let camion = await Transporte.find({"stock_id": id}).sort({"createdAt": -1}).populate('camion_id').populate('user_id');

         if (camion) {
            return res.status(200).json(camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getCamionByChauffeur = async function(req, res){
    let id = req.params.id;

    try{
        let camion = await Camion.find({"chauffeur_id": id}).sort({"createdAt": -1});

         if (camion) {
            return res.status(200).json(camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getCamion = async function(req, res){
    let id = req.params.id;

    try{
        let camion = await Camion.find({"chauffeur_id": id}).sort({"createdAt": -1});

         if (camion) {
            return res.status(200).json(camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getCamionById = async function(req, res){
    let id = req.params.id;

    try{
        let camion = await Camion.find({"_id": id}).sort({"createdAt": -1});

         if (camion) {
            return res.status(200).json(camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.deleteCamion = async function(req, res){
   let id = req.params.id;
    try{
        let camion = await Camion.remove({"_id": id});

         if (camion) {
            return res.status(200).json(camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.updateCamion = async function(req, res){
    let id = req.params.id;
    try{
        let camion = await Camion.find({"_id": id});
      
        camion[0].nom = req.body.nom;
        camion[0].immatriculation = req.body.immatriculation;
        camion[0].type = req.body.type
        camion[0].chauffeur_id = req.body.chauffeur_id;
        camion[0].save();

  
         if (camion[0]) {
            return res.status(200).json(camion[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addCamion = async function(req, res){
    let chauffeur_id = req.params.id;
     try{
        var  camion = new Camion();
      
       
        camion.immatriculation = req.body.immatriculation;
        camion.nom = req.body.nom;
        camion.type = req.body.type;
        camion.chauffeur_id = req.body.chauffeur_id;
      
        camion.save();

  
         if ( camion) {
            return res.status(200).json( camion);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


 module.exports.addPosition = async function(req, res){
   
  
  
     try{
        var  position = new Position();
      
       
        position.transporte_id = req.body.transporte;
        position.quantite = req.body.quantite;
        position.commande_id = req.body.commande_id;
        position.panier = req.body.panier_id;
        position.date = req.body.date;
        position.heure = req.body.heure;
        position.quantite_masquer = req.body.quantite;
        position.save();

  
         if (position) {


            let commande = await Commande.find({"_id": req.body.commande_id}).sort({"createdAt": -1});
            commande[0].panier.forEach(result => {
                if(result._id == req.body.panier_id){
                    result.quantite_positionner =  parseInt(result.quantite_positionner) +  parseInt(req.body.quantite);
               
                  //  result.quantite_livrer = parseInt(result.quantite_livrer) + parseInt(req.body.quantite);
                   result.save();
                 
                }

            })
            commande[0].save();

            return res.status(200).json(position);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }
 


 module.exports.deletePosition = async function(req, res){
    id = req.params.id;
    try{
        let position = await Position.remove({"_id": id});

         if (position) {
            return res.status(200).json(position);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.viewTransport = async function(req, res){
    let id = req.params.id;
    try{
        let transport = await Transporte.find({"chauffeure_id": id}).sort({"createdAt": -1}).populate({
            path: "stock_id", 
            populate: {
               path: "fournisseur_id" 
            }
           }).populate('zone_id').populate('camion_id').populate({
            path: "stock_id", 
            populate: {
               path: "produit_id",
               populate: {
                path: "categorie_id" 
             } 
            }
           });

         if (transport) {
            return res.status(200).json(transport);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getZonesF = async function(req, res){
    let id = req.params.id;
    try{
        let zones = await Zone.find({"user_id": id}).sort({"createdAt": -1}).populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });

         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addTransport = async function(req, res){
    let chauffeur_id = req.params.id;
     try{
        var transport = new Transporte();
      
       
        transport.maximum = req.body.maximum;
        transport.camion_id = req.body.camion_id;
        transport.prix = req.body.prix;
        transport.stock_id = req.body.stock_id;
        transport.minimum = req.body.minimum;
        transport.zone_id = req.body.zone_id;
        transport.chauffeure_id = chauffeur_id;
        transport.save();

  
         if (transport) {
            return res.status(200).json(transport);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


module.exports.addPlage = async function(req, res){
   let id = req.body.id_zone;
   console.log("zone",req.body)
    try{
        //let zone = Zone.insertMany(req.body);
        let zones = await Zone.find({"_id":id}).sort({"createdAt": -1});
           //zones[0].plage.push(req.body);
            //zones[0].save();
            var object = {
                id_zone: req.body.id_zone,
                passport_id: req.body.passport_id,
                produit_id: req.body.produit_id,
                minimum: req.body.minimum,
                maximum: req.body.maximum,
               total: req.body.total,
              
               };
    
             zones[0].plage.push(object);
            zones[0].save();
         if (zones[0]) {
            return res.status(200).json(zones[0]);
        } else {

            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getAllPosition = async function(req, res){
    let id_panier = req.params.id;
    let id_commande = req.params.id_commande;
  
      try{

        let position = await Position.find({"panier":id_panier,"commande_id":id_commande}).sort({"createdAt": -1}).populate({
            path: "transporte_id", 
            populate: {
               path: "stock_id",
               populate: {
                path: "fournisseur_id",
                
             }  
            }        
         }).populate({
            path: "transporte_id", 
            populate: {
               path: "camion_id",
                
            }        
         }).populate({
            path: "transporte_id", 
            populate: {
               path: "chauffeure_id",
                
            }        
         });


        if ( position) {
            return res.status(200).json(position);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }


 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.deletePlage = async function(req, res){
    let id = req.params.id;
    let id_zone = req.params.id_zone;
  
      try{

        let zones = await Zone.find({"_id":id_zone}).sort({"createdAt": -1});

    

        var tab = [];
        zones[0].plage.forEach(result => {
           if(result._id == id){
               result.remove();
              //result.save();
            
           }
          
        });
        zones[0].save();
        return res.status(200).json(zones);

 
      } catch (error) {
          console.log(error)
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.Plage = async function(req, res){
  let id = req.params.id;
  

    try{
        let zones = await Zone.find({"_id":id}).sort({"createdAt": -1}).populate({
            path: "plage.produit_id", 
            populate: {
               path: "categorie_id" 
            }
           }).populate({
            path: "plage.passport_id", 
          
           });
         

    

       /* var tab = [];
        zones[0].plage.forEach(result => {
           if(result.delete == 0){
               tab.push(result)
            
           }
          
        });*/
        return res.status(200).json(zones);

    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteChauffeur = async function(req, res){
    id = req.params.id;
    try{
        let chauffeur = await Chauffeure.remove({"_id": id});

         if ( chauffeur) {
            return res.status(200).json(chauffeur);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.rechercheZone = async function(req, res){
    id = req.params.id;
    try{
        let zone = await Commune.find({"_id": id});

         if ( zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.rechercheQuartier = async function(req, res){
    id = req.params.id;
    try{
        let zone = await Zone.find({"localite": id});

         if ( zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.updateChauffeur = async function(req, res){
    let id = req.params.id;
    try{
        let chauffeur = await Chauffeure.find({"_id": id});
      
        chauffeur[0].nom = req.body.nom;
        chauffeur[0].prenom = req.body.prenom;
        chauffeur[0].telephone = req.body.telephone;
        chauffeur[0].ville = req.body.ville;
        chauffeur[0].commune = req.body.commune;
          chauffeur[0].save();

  
         if (chauffeur[0]) {
            return res.status(200).json(chauffeur[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.updateZone = async function(req, res){
    let id = req.params.id;
    try{
        let zone = await Zone.find({"_id": id});
      
        zone[0].commune_id = req.body.commune_id;
       
        
        zone[0].localite = req.body.localite;
       
        zone[0].save();

  
         if (zone[0]) {
            return res.status(200).json(zone[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getPaginatedZones = async function(req, res){
    const { page = req.params.page, limit = 10 } = req.query;
    try{
        const options={
            page: page,
            limit: limit,
            populate:{
                path: 'commune_id',
                populate: {
                    path: "region_id",
                 }
            }
        }
         const zone = await Zone.paginate({}, options);
        console.log("zone", zone)
       
        
         if (zone) {
            return res.status(200).json(zone);   
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.allzones = async function(req, res){
    let id = req.params.id
    try{
        let zones = await Zone.find({"commune_id":id}).sort({"createdAt": -1});
      
         if (zones) {
            
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.allChauffeur = async function(req, res){
    
    try{
        let chauffeur = await User.find({"acte":2}).sort({"createdAt": -1});
      
         if (chauffeur) {
            
            return res.status(200).json(chauffeur);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.QuartierByZone = async function(req, res){
    let id = req.params.id;
    try{
        let zones = await Zone.find({"commune_id": id}).sort({"createdAt": -1});
   console.log("bella barry",zones);
         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getZonesPlage = async function(req, res){
    let id = req.params.id;
    try{
        let zones = await Zone.find({"commune_id":id}).sort({"createdAt": -1}).populate({
            path: "region_id", 
           
           
         });

         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.countZone = async function(req, res){
    try{

        let zone = await Zone.find({"delete":0})
        

         if (zone) {
            let nbZone = zone.length
            return res.status(200).json(nbZone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.countChauffeur = async function(req, res){
  
    try{
        let nbChauffeur = await Chauffeure.count({})
        console.log("barry bella",nbChauffeur);
         if (nbChauffeur) {
            return res.status(200).json(nbChauffeur);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getZoness = async function(req, res){
    try{
        let zones = await Zone.find().sort({"createdAt": -1}).populate({
            path: "commune_id", 
            populate: {
               path: "region_id",
            }
         });
         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.getChauffeur = async function(req, res){
    let id = req.params.id;
    try{
        let chauffeur = await Chauffeure.find({"_id": id}).sort({"createdAt": -1});

         if (chauffeur) {
            return res.status(200).json(chauffeur);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getZone = async function(req, res){
    let id = req.params.id;
    try{
        let zones = await Zone.find({"_id": id}).sort({"createdAt": -1}).populate('produit_id');

         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addChauffeur = async function(req, res){
    try{
         var chauffeur = new Chauffeure();
        chauffeur.nom = req.body.nom;
        chauffeur.prenom = req.body.prenom;
        chauffeur.telephone = req.body.telephone;
        chauffeur.commune = req.body.commune;
        chauffeur.ville = req.body.ville;
        chauffeur.save();


         if (chauffeur) {
            return res.status(200).json(chauffeur);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addZone = async function(req, res){
    try{
         var zone = new Zone();
     
        zone.localite = req.body.localite;
        zone.commune_id = req.body.commune_id;
        zone.save();


         if (zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addZones = async function(req, res){
    try{
         var zone = new Zone();
        zone.unite = req.body.unite;
        zone.ville = req.body.ville;
        zone.user_id = req.body.user_id;
        zone.localite = req.body.localite;
        zone.commune = req.body.commune;
        zone.unite = req.body.unite;
        zone.prix = req.body.prix;
        zone.prixLivraison = req.body.prixLivraison;
        zone.produit_id = req.body.produit_id;
        zone.save();


         if (zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getZones = async function(req, res){
    try{
        let zones = await Zone.find({"delete": 0}).sort({"createdAt": -1}).populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id",
              
            }
           
         });

         if (zones) {
            return res.status(200).json(zones);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteTransport = async function(req, res){
    id = req.params.id;
    try{
        let zone = await Transporte.remove({"_id": id});

         if (zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.deleteZone = async function(req, res){
    id = req.params.id;
    try{
        let zone = await Zone.remove({"_id": id});

         if (zone) {
            return res.status(200).json(zone);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
