
//var User = require('../models/User');
var User = require('../models/User');
var Carte = require('../models/Carte');
var Users = require('../models/User');
var Us  = require('../models/Distributeur');
var Demande = require('../models/Demande');
var Garde = require('../models/Garde');
var Vente = require('../models/Vente');
var Commande = require('../models/Commande');
var Chauffeur = require('../models/Chauffeure');

module.exports.addChauffeur = async function(req, res){
    try{


       var object = {
             //distributeur_id  : req.body.distributeur_id ,
            nom : req.body.nom,
            prenom : req.body.prenom,
            tel : req.body.tel,
            ville : req.body.ville,
            commune: req.body.commune,

            
        };
        let chauffeur = Chauffeur.insertMany(object);


 

         if (chauffeur) {
          console.log("bella" ,req.body);
            return res.status(200).json(chauffeur);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.allUsersCT = async function(req, res){
    let fournisseur="Distributeur";
    try{

        let users = await Users.find({"carte":1,"commande":1}).sort({"createdAt": -1});

 let commandes = await Commande.find({"status_relation":2,"delete":0,"status":7}).sort({"createdAt": -1});

        var tab = [];
        users.forEach(result => {
            commandes.forEach(results => {
           if(results.client_id == result._id){
                tab.push(result)
              //result.save();

           }

	});

	});
      

	if(!users){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}



module.exports.getCartePayerAD = async function(req, res){
 let ad ="AD";
 try{


     	let garde = await Carte.find({"paye": 1,"embassadeur":ad}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.paye = async function(req, res){
     let id = req.body.carte_id;
 try{
 let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        let today  = new Date();
       let da=today.toLocaleDateString("fr-FR", options);


     	let garde = await Carte.find({"_id": id}).sort({"createdAt": -1});
           garde[0].paye = 0;
           garde[0].montant_payer = req.body.montant_payer + garde[0].montant_payer;
          garde[0].montant_restant = garde[0].montant - garde[0].montant_payer;   
            var object = {
      
            montant_payer : req.body.montant_payer,
            date :da
        };
    
            garde[0].historique.push(object);
           garde[0].save();
         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getCartePayer = async function(req, res){
    
 try{


     	let garde = await Carte.find({"paye": 1}).sort({"createdAt": -1});
          
         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}







module.exports.viewProduitGarde = async function(req, res){
    let id = req.params.id;


      try{
          let  cartes = await Garde.find({"_id":id}).sort({"createdAt": -1});



          var tab = [];
          cartes[0].produit.forEach(result => {
             if(result.delete == 0){
                 tab.push(result)
                // console.log("bella aliou",result);

             }

          });
      console.log("bella aliou",tab);
          return res.status(200).json(tab);
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }

module.exports.getUserByTel = async function(req, res){
     let id =req.params.id;
 try{


     	let garde = await User.find({"tel": id}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getGardeById = async function(req, res){
     let id =req.params.id;
 try{


     	let garde = await Garde.find({"delete": 0}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addGardes = async function(req, res){
    let id = req.body.garde_id;
    //console.log("id zone", req.body.carte_id);
     try{

         //let zone = Zone.insertMany(req.body);
         let carte = await Garde.find({"_id": id}).sort({"createdAt": -1});


       var object = {
            categorie_id: req.body.categorie_id,
            garde_id: req.body.garde_id,
            //quantites : req.body.quantites,
            //quantites_restant: req.body.quantites,
            //montant : carte[0].montant

        };
//  let carte = await Ca.find({"_id": id}).sort({"createdAt": -1});
            carte[0].produit.push(object);
            carte[0].save();

          if (carte[0]) {
              console.log("bella",carte[0]);
             return res.status(200).json(carte[0]);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.viewVente = async function(req, res){
     //let id =req.params.id;
 try{


     	let garde = await Carte.find({"delete": 0}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.CarteActive = async function(req, res){
     //let id =req.params.id;
 try{


     	let garde = await Carte.find({"active": 1}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.CarteActiveAya = async function(req, res){
     //let id =req.params.id;
 try{

     let ad ="AD";
     	let garde = await Carte.find({"active": 1,"embassadeur":ad}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.CarteAya = async function(req, res){
     //let id =req.params.id;
 try{

       let ad ="AD";
     	let garde = await Carte.find({"embassadeur":ad}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getUserVenteById = async function(req, res){
     let id =req.params.id;
 try{


     	let garde = await User.find({"_id": id}).sort({"createdAt": -1});

         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.addVentes = async function(req, res){
    let id = req.body.carte_id;
    console.log("id zone", req.body.carte_id);
     try{

         //let zone = Zone.insertMany(req.body);
         let carte = await Carte.find({"_id": id}).sort({"createdAt": -1});


       var object = {
            categorie_id: req.body.categorie_id,
            carte_id: req.body.carte_id,
          //  quantites : req.body.quantites,
            //quantites_restant: req.body.quantites,
            montant : carte[0].montant

        };
//  let carte = await Carte.find({"_id": id}).sort({"createdAt": -1});
            carte[0].produit.push(object);
            carte[0].save();

          if (carte[0]) {
              console.log("bella",carte[0]);
             return res.status(200).json(carte[0]);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }


 module.exports.payementFournisseur = async function(req, res){
   let id = req.body.id;

    try{
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        let today  = new Date();
       let da = today.toLocaleDateString("fr-FR", options);
        let fournisseur = await User.find({"_id": id});
        
       
        fournisseur[0].montantPayer =  fournisseur[0].montantPayer + req.body.montant;
        fournisseur[0].montant_restant = fournisseur[0].montantPayer - req.body.montant ;
       var object = {
             //distributeur_id  : req.body.distributeur_id ,
           quantite : req.body.quantite,
            montant : req.body.montant,
             date: da,
           
        };


          fournisseur[0].historique.push(object);
          fournisseur[0].save();

         if (fournisseur) {
        
            return res.status(200).json(fournisseur);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addVente = async function(req, res){
    try{


       var object = {
             //distributeur_id  : req.body.distributeur_id ,
            identifiant : req.body.identifiant,
            quantites : req.body.quantites,
             quantites_restant: req.body.quantites,
            montant : req.body.montant,
            active : req.body.active,
           embassadeur : req.body.embassadeur
        };
        let carte = Carte.insertMany(object);


 

         if (carte) {
          console.log("bella" ,req.body);
            return res.status(200).json(carte);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}





module.exports.approGarde = async function(req, res){
    try{

          let garde = await Garde.find({"_id": req.body.garde_id});
          
        garde[0].total = garde[0].total + req.body.total ;
        garde[0].dernier =  req.body.dernier ;
          garde[0].historique.push(req.body);       
                   garde[0].save();
            
         if (garde) {

            return res.status(200).json(garde);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}






module.exports.addGarde = async function(req, res){
    try{

         // let user = await User.find({"_id": req.body.fournisseur_id});
         //     user[0].demandes.push(req.body);
       //        user[0].save();
        let garde = Garde.insertMany(req.body);
             //console.log("groupe",req.body);
         if (garde) {

            return res.status(200).json(garde);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.viewGarde = async function(req, res){
     //let id =req.params.id;
 try{


     	let garde = await Garde.find({"delete": 0});
           
         if (garde) {


      return res.status(200).json(garde);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.rejeterDemande = async function(req, res){
     let id =req.params.id;
 try{


     	let demande = await Demande.find({"_id": id});
           demande[0].valider = 2;
             demande[0].save();
         if (demande) {


      return res.status(200).json(demande);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.activeCarte = async function(req, res){
     let id =req.params.id;
 try{
//          let em ="BT";

     	let carte = await Carte.find({"_id": id});
           carte[0].active = 1;
             carte[0].save();
         if (carte[0]) {


      return res.status(200).json(carte[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.desactiveCarte = async function(req, res){
     let id =req.params.id;
 try{


     	let carte = await Carte.find({"_id": id});
           carte[0].active = 0;
             carte[0].save();
         if (carte[0]) {


      return res.status(200).json(carte[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.addPayement = async function(req, res){
     let id = req.body.id;
 try{


     	let demande = await Demande.find({"_id": id});
           demande[0].montant_payer = demande[0].montant_payer + req.body.montant ;
            demande[0].reste_payer =  demande[0].montant - demande[0].montant_payer;
                     var object = {
            date :req.body.date,
            montant : req.body.montant
        };        
         demande[0].payement.push(object);
             demande[0].save();
         if (demande) {



      return res.status(200).json(demande);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.validerDemande = async function(req, res){
     let id =req.params.id;
 try{


     	let demande = await Demande.find({"_id": id});
       	   demande[0].valider = 1;
       	     demande[0].save();
         if (demande) {


      return res.status(200).json(demande);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addDemande = async function(req, res){
    try{
      
         // let user = await User.find({"_id": req.body.fournisseur_id});      
         //     user[0].demandes.push(req.body);
       //        user[0].save(); 
        let demande = Demande.insertMany(req.body);
             //console.log("groupe",req.body);
         if (demande) {
           
            return res.status(200).json(demande);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteDemande = async function(req, res){
     let id = req.params.id;   
 try{
          
   //let zone = await Zone.remove({"_id": id});        
        let demande = await Demande.remove({"_id": id});
         
         if (demande) {

       
      return res.status(200).json(demande);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}

module.exports.getDemande = async function(req, res){
     let id =req.params.id;
 try{


     	let demande = await Demande.find({"fournisseur_id": id}).populate({
            path: "produit_id",
            populate: {
               path: "categorie_id"
            }
           });

         if (demande) {


      return res.status(200).json(demande);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.allUsersA = async function(req, res){
    let fournisseur="Distributeur";
    try{
        let users = await Us.find({"role": fournisseur}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}



module.exports.comptes = async function(req, res){
    let tel= req.params.id;
    try{
        let user = await User.find({"tel": tel});
        if(user){
            let carte = await Carte.find({"distributeur_id": user[0]._id,"delete":0});
            if(!carte){
                return res.status(404).send(new Error('Érror 404 data note found...'));
            }else{
                return res.status(200).json(carte);
            }
        }else{
            return res.status(200).json([]);
        }
       

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

  module.exports.compte = async function(req, res){
    let user_id =req.params.id; ;
    try{
        let user = await Carte.find({"distributeur_id": user_id,"delete": 0});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.addCarte = async function(req, res){
    try{



       let users = await Carte.find({"identifiant": req.body.identifiant });
          
           if(users[0]){
    	users[0].distributeur_id = req.body.distributeur_id;
                  users[0].active = 1;
                 users[0].save();

         let user = await User.find({"_id": req.body.distributeur_id });
            user[0].carte = 1 ;
                  user[0].save();
                   
                 
 options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code:"+224", // String; Telephony code of your country Ex: +237
            sender_number: user[0].tel, // Number; The number to which you are sending a message without area code
            sender_phone:  user[0].tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme " +  user[0].name + " " + " la carte " + req.body.identifiant +" a �t�  activer sur votre compte.\n"+"Bankitruck, votre E-comerce d’agregat.\n"+"www.bankitruck.com.\n"+"infoline : 888" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms); 
                
                }).catch((error)=>{
                  console.log(error);
                });



         if (user) {

            return res.status(200).json(user);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }

        }else{
              

             return res.status(203).json({ "message": "cette carte est incorrecte","status": 203 });


}
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addActive = async function(req, res){
    try{


       var object = {
             distributeur_id  : req.body.distributeur_id ,
            identifiant : req.body.identifiant,
            quantites : req.body.quantites,
             quantites_restant: req.body.quantites,
            montant : req.body.montant

        };
	let carte = Active.insertMany(object);


         if (carte) {
          console.log("bella" ,req.body);
            return res.status(200).json(carte);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.carteExist = async function(req, res){
    let carte = req.params.carte;
    try{
        let user = await Carte.find({"identifiant": carte,"active":1});
        if(!user){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.activeExist = async function(req, res){
    let carte = req.params.carte;
    try{
        let user = await Active.find({"identifiant": carte});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.viewProduit = async function(req, res){
    let id = req.params.id;
    
  
      try{
          let  cartes = await Carte.find({"_id":id}).sort({"createdAt": -1});
  
      
  
          var tab = [];
          cartes[0].produit.forEach(result => {
             if(result.delete == 0){
                 tab.push(result)
                // console.log("bella aliou",result);
              
             }
            
          });
          return res.status(200).json(tab);
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.viewProduitVente = async function(req, res){
    let id = req.params.id;


      try{
          let  cartes = await Carte.find({"_id":id}).sort({"createdAt": -1});



          var tab = [];
          cartes[0].produit.forEach(result => {
             if(result.delete == 0){
                 tab.push(result)
                // console.log("bella aliou",result);

             }

          });
          return res.status(200).json(tab);
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.deleteRole = async function(req, res){
    let id = req.params.id;
    let id_user = req.params.user_id;
  
      try{

        let users = await Users.find({"_id":id_user}).sort({"createdAt": -1});

    

        var tab = [];
        users[0].roles.forEach(result => {
           if(result._id == id){
               result.remove();
              //result.save();
            
           }
          
        });
        users[0].save();
        return res.status(200).json(users);

 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.viewRole = async function(req, res){
    let id = req.params.id;
    
  
      try{
          let  roles = await Users.find({"_id":id}).sort({"createdAt": -1});
  
      
  
          var tab = [];
          roles[0].roles.forEach(result => {
             
                 tab.push(result)
                // console.log("bella aliou",result);
            
          });
          return res.status(200).json(tab);
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.addCartes = async function(req, res){
    let id = req.body.carte_id;
    console.log("id zone", req.body.carte_id);
     try{

         //let zone = Zone.insertMany(req.body);
         let carte = await Carte.find({"_id": id}).sort({"createdAt": -1});


       var object = {
            categorie_id: req.body.categorie_id,
            carte_id: req.body.carte_id,
          //  quantites : req.body.quantites,
            //quantites_restant: req.body.quantites,
            montant : carte[0].montant
         
        };       
//  let carte = await Carte.find({"_id": id}).sort({"createdAt": -1});
            carte[0].produit.push(object);
            carte[0].save();
                
          if (carte[0]) {
              console.log("bella",carte[0]);
             return res.status(200).json(carte[0]);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.getCarteById = async function(req, res){
    let id =req.params.id;
    try{
      
        let carte = await Carte.find({"_id": id,"delete":0});

         if (carte) {
          
            return res.status(200).json(carte);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getVenteById = async function(req, res){
    let id =req.params.id;
    try{

        let carte = await Carte.find({"_id": id,"delete":0});

         if (carte) {

            return res.status(200).json(carte);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.addRole = async function(req, res){
//    let id =req.params.id;
    try{

        let user = await Users.find({"_id":req.body.user_id});
          var object = {
            role : req.body.role,
            user_id : req.body.user_id
           
        };
    if(req.body.role =='Chauffeur'){
        user[0].acte = 2;
    }else if(req.body.role =='Distributeur')
    {
        user[0].actes = 2;
    }

          user[0].roles.push(object);
          user[0].save();
         if (user) {

            return res.status(200).json(user);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}




module.exports.deleteProd = async function(req, res){
    let id = req.params.id;
    let id_carte = req.params.carte_id;
  
      try{

        let cartes = await Carte.find({"_id":id_carte}).sort({"createdAt": -1});

    

        var tab = [];
        cartes[0].produit.forEach(result => {
           if(result._id == id){
               result.remove();
              //result.save();
            
           }
          
        });
        cartes[0].save();
        return res.status(200).json(cartes);

 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.deleteProdVente = async function(req, res){
    let id = req.params.id;
    let id_carte = req.params.carte_id;

      try{

	let cartes = await Carte.find({"_id":id_carte}).sort({"createdAt": -1});



        var tab = [];
        cartes[0].produit.forEach(result => {
           if(result._id == id){
               result.remove();
              //result.save();

           }

	});
	cartes[0].save();
        return res.status(200).json(cartes);

 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }

module.exports.deleteCarteVente = async function(req, res){
    let id =req.params.id;
    try{

        let  carte = await Carte.find({"_id": id});
          // carte[0].delete = 1;
          // carte[0].save();
           carte[0].remove();
         if (carte[0]) {

            return res.status(200).json(carte[0]);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.deleteCarte = async function(req, res){
    let id =req.params.id;
    try{
      
        let  carte = await Carte.find({"_id": id});
          // carte[0].delete = 1;
          // carte[0].save();
           carte[0].remove();
         if (carte[0]) {
          
            return res.status(200).json(carte[0]);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.viewCarte = async function(req, res){
    let id =req.params.id;
    try{
      
        let carte = await Carte.find({"distributeur_id": id,"delete":0}).sort({"createdAt": -1});

         if (carte) {
          
            return res.status(200).json(carte);
            
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.viewActive = async function(req, res){
    let id =req.params.id;
    try{

        let carte = await Active.find({"distributeur_id": id,"delete":0}).sort({"createdAt": -1});

         if (carte) {

            return res.status(200).json(carte);

	} else {
	    return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.updateUsers = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].name = req.body.name;
            user[0].email = req.body.email;
            user[0].tel = req.body.tel;
           user[0].localisation = req.body.localisation;
           user[0].coordonner = req.body.coordonner;
           user[0].societe = req.body.societe;

           user[0].prenom = req.body.prenom;          
           user[0].date_naissance = req.body.date_naissance;   
          user[0].lieu_naissance = req.body.lieu_naissance;
          user[0].numero = req.body.numero;           
          user[0].photo = req.body.photo;
         // user[0].commande = 1;
         user[0].types = req.body.types;
          user[0].branding = req.body.branding; 
       
          user[0].zone = req.body.zone;
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
module.exports.allUsersFi = async function(req, res){
    let facturation="Facturation";
    try{
             let users = await Users.find({}).sort({"createdAt": -1});



        var tab = [];
        users.forEach(result => {
            result.roles.forEach(results => {
           if(results.role == facturation){
                tab.push(result)
              //result.save();

           }

	});

	});      
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.CommandeByFournisseur = async function(req, res){
    let fournisseur="Fournisseur";
    try{
        let users = await User.find({"role": fournisseur}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersF = async function(req, res){
    let fournisseur="Fournisseur";
    try{
         
	let users = await Users.find({}).sort({"createdAt": -1});



        var tab = [];
        users.forEach(result => {
            result.roles.forEach(results => {
           if(results.role == fournisseur){
                tab.push(result)
              //result.save();

           }

        });

	});
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(tab);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersFP = async function(req, res){
    let fournisseur="PDV";
    try{

        let users = await Users.find({}).sort({"createdAt": -1});



        var tab = [];
	users.forEach(result => {
            result.roles.forEach(results => {
	   if(results.role == fournisseur){
                tab.push(result)
              //result.save();

           }

        });

        });
        if(!users){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(tab);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersDD = async function(req, res){
    let fournisseur="Distributeur";
    try{

        let users = await Users.find({}).sort({"createdAt": -1});



        var tab = [];
        users.forEach(result => {
            result.roles.forEach(results => {
           if(results.role == fournisseur){
                tab.push(result)
              //result.save();

           }

	});

	});
      

	if(!users){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(tab);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}



module.exports.allUsersCarte = async function(req, res){
    let fournisseur="Distributeur";
    try{

        let users = await Users.find({"carte":1}).sort({"createdAt": -1});



        var tab = [];
        users.forEach(result => {
            result.roles.forEach(results => {
           if(results.role == fournisseur){
                tab.push(result)
              //result.save();

           }

	});
	});
	if(!users){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(tab);
        }
    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
exports.allUsersDAdmin = async (req, res) => {
 
    const { page = req.params.page, limit = 10 } = req.query;
  
    try {
      const articles = await Users.paginate({"societe":req.params.id}, { page, limit });

      console.log("bella",articles);

      res.status(200).json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
exports.allUsersD = async (req, res) => {
    const { page = req.params.page, limit = 10 } = req.query;
  
    try {
      const articles = await Users.paginate({}, { page, limit });

      console.log("bella",articles);

      res.status(200).json(articles);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports.allUsersDssssss = async function(req, res){
    let distributeur="Distributeur";
    try{
        let users = await Users.find({}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsers = async function(req, res){
    try{
        let users = await User.find({}).sort({"createdAt": -1});
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.RevoqueAutoriser = async function(req, res){
    id = req.params.id;
    try{
          let user = await User.remove({"_id": id});
       
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.Autoriser = async function(req, res){
    id = req.params.id;
    try{
        let user = await User.find({"_id": id});
        user[0].active = 0;
        user[0].save();
        if(!user[0]){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.RechercheUser = async function(req, res){
    let id = req.params.id;
    console.log("log",id);

    try{
        let user = await Users.find({"_id": id});
        console.log("log bella",user);
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.recherche = async function(req, res){
    let id = req.body.email;
    console.log("log",id);

    try{
        let user = await Users.find({"tel": id});
        console.log("log bella",user);
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.getUserById = async function(req, res){
    let id = req.params.id;

    try{
        let user = await Users.find({"_id": id});
      
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.telExist = async function(req, res){
    let tel = req.params.tel;
    try{
        let user = await User.find({"tel": tel});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}


module.exports.emailExist = async function(req, res){
    let email = req.params.email;
    try{
        let user = await User.find({"email": email});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}


module.exports.emailOrTelExist = async function(req, res){
    let value = req.params.value;
    try{
        let user = await User.find({ $or: [ { "tel": value }, { "email": { "$eq": value} } ] });
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.CodeExist = async function(req, res){
    let value = req.params.value;
    try{
        let user = await User.find({"codes": value});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.venteExist = async function(req, res){
    let carte = req.params.carte;
    try{
        let user = await Carte.find({"identifiant": carte});
        if(!user){
            return res.status(404).send(new Error('?^?rror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.setRamdom = async function(req, res){
    let tel = req.params.tel;
    
}

module.exports.deleteUser = async function(req, res){
    id = req.params.id;
    try{
        let user = await Users.remove({"_id": id});

         if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.updatePassword = async function(req, res) {
    var id = req.params.id
    try{
        // var us = new User();
        let user = await User.find({"_id": id});
        user[0].setPassword(req.body.newPassword);
        user[0].codes = 0;
        user[0].save();
        if(user){
            return res.status(200).json(user[0]);
        }else{
          return res.status(404).send(new Error('Erreur 404...'));
        }
    }catch(err){
      return res.status(500).send(new Error('Erreur 500...'));

    } 
};
module.exports.updateUser = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].name = req.body.name;
            user[0].email = req.body.email;
            user[0].commune = req.body.commune;
            user[0].ville = req.body.ville;
            user[0].quartier = req.body.quartier;
            user[0].tel = req.body.tel;
            user[0].nameEntreprise = req.body.nameEntreprise;
            user[0].type = req.body.type;
            user[0].devise = req.body.devise;
            user[0].logo= req.body.logo;
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
module.exports.updateUserValidation = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        let valider="confirmer";
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].valider = valider;
            user[0].setPassword(req.body.password);
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
