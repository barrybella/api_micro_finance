const Produit = require('../models/Agrega');
const Vaccination = require('../models/Vaccination');
const User = require('../models/User');
const Favorie = require('../models/Favorie');
const Categorie = require('../models/Categorie');
const Slider = require('../models/Slider');
const Version = require('../models/Version');
const Terrain = require('../models/Terrain');
const Partenaire = require('../models/Partenaire');
const Produits = require('../models/Produit');
const Passport = require('../models/Passport');


module.exports.getPassport = async function(req, res){
   
    try{
        
        
        let passport = await Passport.find({}).sort({"createdAt": -1});
       if (passport) {
           
      return res.status(200).json(passport);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.AllPassport = async function(req, res){
   
    try{
        
        
        let passport = await Passport.find({}).sort({"createdAt": -1});
       if (passport) {
           
      return res.status(200).json(passport);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addPassport = async function(req, res){
   
  try{
         let passport = Passport.insertMany(req.body);
   

                  
              
          if (passport) {
             return res.status(200).json(passport);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
}


module.exports.deletePartenaire = async function(req, res){
    id = req.params.id;
    try{
        let partenaire = await Partenaire.remove({"_id": id});

      

        if (partenaire) {
            return res.status(200).json(partenaire);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.DeleteTerrain = async function(req, res){
    id = req.params.id;
    try{
        let terrain = await Terrain.remove({"_id": id});

         if (terrain) {
            return res.status(200).json(terrain);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.AllTerrainById = async function(req, res){
let id = req.params.id;
    try{


        let terrain = await Terrain.find({"_id":id}).sort({"createdAt": -1});
       if (terrain) {

      return res.status(200).json(terrain);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.AllTerrain = async function(req, res){
   
    try{
        
        
        let terrain = await Terrain.find({}).sort({"createdAt": -1});
       if (terrain) {
           
      return res.status(200).json(terrain);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addTerrain = async function(req, res){
    try{
        let terrain = Terrain.insertMany(req.body);

         if (terrain) {
            return res.status(200).json(terrain);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}



module.exports.add = async (req, res) => {
    try {
        

      let _version  = Version.insertMany(req.body)

        if(_version){
            return res.status(201).json(_version)
        }
    } catch (err) {
        return res.status(500).json({ error: 'Une erreur du serveur s\'est produite !!!' })
    }
}

module.exports.get = async (req, res) => {
    try {
        await Version.findOne({'type_system': req.params.type}, (err, docs) => {
            if (!err && docs) 
                return res.status(200).json(docs)
            return res.status(500).json({error: 'system non trouvé'})
        })
    } catch (err) {
        return res.status(500)
    }
}


module.exports.update = async (req, res) => {
    try {
        const _version = await Version.findOne({'type_system': req.params.type});
        if(_version){
          _version.version = req.body.version;
          _version.build = req.body.build;
          _version.save();
          return res.status(201).json(_version)
        }
    } catch (err) {
        return res.status(500).json({ error: 'Une erreur du serveur s\'est produite !!!' })
    }
}







module.exports.deleteSlider = async function(req, res){
   let  id = req.params.id;
    try{
        let categorie = await Slider.remove({"_id": id});


       

        if (categorie) {
            return res.status(200).json(categorie);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getSliderById = async function(req, res){
 let    id = req.params.id;
    try{
        let categorie = await Slider.find({"_id": id});

       

        if (categorie) {
            return res.status(200).json(categorie[0]);
        } else {x
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
 module.exports.updateSlider = async function(req, res){
    let id = req.params.id;
     try{
         let categorie = await Slider.find({"_id": id});
        
         categorie[0].titre = req.body.titre;
         categorie[0].description = req.body.description;

         categorie[0].image = req.body.image;
         
         categorie[0].save();
 
         if  (categorie[0]) {
             return res.status(200).json(categorie[0]);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.addSlider = async function(req, res){
    try{
        let slider = Slider.insertMany(req.body);

         if (slider) {
            return res.status(200).json(slider);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getSlider = async function(req, res){

    try{
       	

        let produits   = await Slider.find({"delete": 0}).sort({"createdAt": -1});
 

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {

 return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsByPromo = async function(req, res){
  
    try{
        
       
        let produits = await Produit.find({"delete": 0,"promo":1,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
       

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {
      
 return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.rejeterProduit = async function(req, res){
     let id = req.body.id;
     let commentaire = req.body.commentaire;
    try{


        let produits = await Produit.find({"delete": 0,"_id":id}).sort({"createdAt": -1}).populate('categorie_id');
         produits[0].commentaire = commentaire;
           produits[0].validation = 2;
           produits[0].delete = 1;      
          produits[0].save();

let user = await User.find({"_id": produits[0].distributeur_id});
 let marque = await Categorie.find({"_id":produits[0].categorie_id});
            options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224", // String; Telephony code of your country Ex: +237
            sender_number: user[0].tel, // Number; The number to which you are sending a message without area code
            sender_phone: user[0].tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme" +" "+ user[0].name + " votre produit" + marque[0].nom  + " n'a pas ét�valider parce que "+ commentaire + " Veuillez enregistrer le produit à nouveau.\n"  };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });
         


       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {

 return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.deleteFavorie = async function(req, res){
      let favorie_id = req.params.id
    try{

          

        let produits = await Favorie.find({"_id": favorie_id}).sort({"createdAt": -1});
         let produit = await Produit.find({"_id": produits[0].produit_id}).sort({"createdAt": -1})
          produit[0].compte = produit[0].compte - 1;
           produit[0].save();
          produits[0].delete =  1;
           produits[0].save();
       if (produits) {
      return res.status(200).json(produits[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getFavorie = async function(req, res){
      let user_id = req.params.id
    try{


        let produits = await Favorie.find({"user_id": user_id,"delete":0}).sort({"createdAt": -1}).populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });

           let produit = await Produit.find({"_id": produits[0].produit_id}).sort({"createdAt": -1}).populate('categorie_id');
       if (produits) {
          // console.log("produit",produits);
      return res.status(200).json(produits);
             }else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addFavori = async function(req, res){
  let user_id = req.params.user_id;  
  let produit_id = req.params.produit_id;
//    let user_id = req.params.user_id;
    try{
               let compte = await Produit.find({"_id":produit_id,"delete":0 });
          let produit = await Favorie.find({"user_id":user_id,"produit_id":produit_id,"delete":0 });
           if (produit[0]){
              return res.status(400).json('error');
             
            }else{
               
               var object = {
        user_id: user_id,
       produit_id: produit_id
    };            
         let favorie = Favorie.insertMany(object);
              compte[0].compte = compte[0].compte + 1;
               compte[0].save();
         if (favorie) {
            return res.status(200).json(favorie);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
          }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsByFlashe = async function(req, res){
    
    try{
        
       
        let produits = await Produit.find({"delete": 0,"flash":1}).sort({"createdAt": -1}).populate('categorie_id');
       

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getValider = async function(req, res){

    try{


        let produits = await Produit.find({"delete": 0}).sort({"createdAt": -1}).populate('categorie_id');
            produits[0].validation = 1;
            produits[0].save();

let user = await User.find({"_id": produits[0].distributeur_id});
 let marque = await Categorie.find({"_id":produits[0].categorie_id});
            options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224", // String; Telephony code of your country Ex: +237
            sender_number: user[0].tel, // Number; The number to which you are sending a message without area code
            sender_phone: user[0].tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme" +" "+ user[0].name + " votre produit" + marque[0].nom  + " �t� valider  "+ " Veuillez vous connecter sur votre compte pour contunier le processus de mise en ligne du produit.\n"  };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });













       if (produits[0]) {
           console.log("produit",produits);
      return res.status(200).json(produits[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getInvalider = async function(req, res){

    try{


        let produits = await Produit.find({"delete": 0}).sort({"createdAt": -1}).populate('categorie_id');
            produits[0].validation = 0;
            produits[0].save();


       if (produits[0]) {
           console.log("produit",produits);
      return res.status(200).json(produits[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsBySocieteAndPaysAndCategorie = async function(req, res){
    let societe = req.params.societe;
    let pays = req.params.pays;
    let categorie = req.params.categorie_id;
    try{
        let produit = await Produit.find({"delete": 0,"societe":societe,"pays":pays,"categorie_id":categorie}).sort({"createdAt": -1}).populate('categorie_id');
   
       if (produit) {
           
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsByOneSociete = async function(req, res){
    
    try{
        
        let produit = await Produit.aggregate([
        
            { $match: {"delete": 0}}, 
               {$group :
                   {"_id": "$societe"
                   }
               }
               
           ]);
       if (produit) {
        const yourData = JSON.stringify(produit);
        const your = JSON.parse(yourData);
           console.log("produit",your);
      return res.status(200).json(your);
    
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsByPays = async function(req, res){
    
    try{
        
        let produit = await Produit.aggregate([
        
            { $match: {"delete": 0}}, 
               {$group :
                   {"_id": "$pays"
                   }
               }
               
           ]);
       if (produit) {
        const yourData = JSON.stringify(produit);
        const your = JSON.parse(yourData);
           console.log("produit",your);
      return res.status(200).json(your);
    
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getAllProduitsByCategorie = async function(req, res){
     let size = parseInt(req.params.size);
     let skip = parseInt(req.params.skip);
    let pays = req.params.pays;
    try{
        
        
        let produit = await Produit.find({"delete": 0,"pays":pays}).sort({"createdAt": -1}).populate('categorie_id').limit(size != 0 && size).skip(skip != 0 && skip);
   
    if (produit) {
           console.log("produit",produit);
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getSocieteByCategorie= async function(req, res){
    let societe = req.params.societe;
    try{
        let produit  = await Produit.find({ "validation":1,"societe": societe,"delete":0}).populate({
            path: "produit_id", 
            populate: {
               path: "categorie_id" 
            }
           });
       console.log(produit);
         if (produit) {
            return res.status(200).json(produit);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.FilterProduitsBySocieteAndCategorie = async function(req, res){
    let categorie_id = req.params.categorie_id;
    let societe = req.params.societe;
    try{
        
       
        let produits = await Produit.find({"categorie_id":categorie_id,"validation":1,"societe":societe}).sort({"createdAt": -1}).populate('categorie_id');
        
      

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProduitsByCategories = async function(req, res){
     let size = parseInt(req.params.size);
     let skip = parseInt(req.params.skip);
    try{
        
        let produit = await Produit.find({"delete": 0,"active":1}).sort({"createdAt": -1}).populate('categorie_id') .limit(size != 0 && size).skip(skip != 0 && skip);
       if (produit) {
           console.log("produit",produit);
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.AllProduitsByCategorie = async function(req, res){
    let id = req.params.id;
    try{
        
        
        let produit = await Produit.find({"delete": 0,"categorie_id":id}).sort({"createdAt": -1}).populate('categorie_id');
       if (produit) {
           
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.AllProduitsByFournisseur = async function(req, res){
    let id = req.payload._id;
    try{


        let produit = await Produit.find({"delete": 0,"_id":id,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
       if (produit) {

      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.AllProduitsByCategorie = async function(req, res){
    let id = req.params.id;
    try{


        let produit = await Produit.find({"delete": 0,"categorie_id":id,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
       if (produit) {

      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.allAgregatByFilter = async (req, res) => {
    let societe = req.params.societe;
    //let marque = req.params.marque;
    try {
        const products = await Produit.find({"societe":societe,"validation":1}).populate('categorie_id');
        if(products) 
          return res.status(200).json(products)
        return res.status(404).json({ error: "Vous n'avez aucun produit enregistré" })
    } catch (err) {
        return res.status(500).json({ error: 'Une erreur du serveur s\'est produite !!!' })
    }
  }

module.exports.all = async (req, res) => {
    let size = parseInt(req.params.size);
    let skip = parseInt(req.params.skip);
    try {
        let  products = await Produit.find({"delete":0,"validation":1}).limit(size != 0 && size).skip(skip != 0 && skip).populate('categorie_id');
        if(products) 
          return res.status(200).json(products)
        return res.status(404).json({ error: "Vous n'avez aucun produit enregistré" })
    } catch (err) {
        return res.status(500).json({ error: 'Une erreur du serveur s\'est produite !!!' })
    }
  }

module.exports.Active = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
          produit[0].active = 1;
          produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.Desactive = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
        produit[0].active = 0;
        produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProduitsBySociete = async function(req, res){
    let id = req.params.id;
    try{
        
       
        let produit = await Produit.find({"delete": 0,"_id":id,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
        let societe = produit[0].societe;
        let categorie_id = produit[0].categorie_id;
        let produits = await Produit.find({"delete": 0,"categorie_id":categorie_id,"societe":societe}).sort({"createdAt": -1}).populate('categorie_id');

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsByCategorie = async function(req, res){
    
    try{
        
        
        let produit = await Produit.find({"delete": 0,"active":1}).sort({"createdAt": -1}).populate('categorie_id');
       if (produit) {
           console.log("produit",produit);
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.echantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
          produit[0].echantillon = 1;
          produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.Activechantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
        produit[0].echantillon = 0;
        produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.getPartenaire = async function(req, res){
  
    try{
        
       
        let produits = await Partenaire.find({}).sort({"createdAt": -1});
       

       if (produits) {
           console.log("produit",produits);
      return res.status(200).json(produits);
             } else {
      
 return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addPartenaire = async function(req, res){
   
 try{
        let partenaire = Partenaire.insertMany(req.body);
   

                  
              
         if (partenaire) {
            return res.status(200).json(partenaire);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addProduit = async function(req, res){
    let tel = req.payload.tel;     
    let name = req.payload.name;
    console.log("l'objet du front",req.body)
  try{
         let produit = Produit.insertMany(req.body);
   

                  
              
          if (produit) {
             return res.status(200).json(produit);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
}





module.exports.addProduits = async function(req, res){
   // let tel = req.payload.tel;
   // let name = req.payload.name;
    let user_id = req.body.distributeur_id; 
    let marques = req.body.categorie_id;
 try{
        let produit = Produit.insertMany(req.body);


let user = await User.find({"_id":user_id});
 let marque = await Categorie.find({"_id":marques});
            options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224", // String; Telephony code of your country Ex: +237
            sender_number: user[0].tel, // Number; The number to which you are sending a message without area code
            sender_phone: user[0].tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme" +" "+ user[0].name + " votre produit" + marque[0].nom  + " a ete enregistrié avec succes "+" Nous allons l'analyser et vous revenir dans un bref déla.\n" +"Bankitruck, votre E-comerceagregat.\n"+"www.bankitruck.com.\n"+"infoline : 888" // String; Your message text to send, not much than 160 characters otherwise Or$
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });


         if (produit) {
            
          let marque = await Categorie.find({"_id":marques});
            options = {
            authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224", // String; Telephony code of your country Ex: +237
            sender_number: 620284907, // Number; The number to which you are sending a message without area code
            sender_phone: 620284907, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme" +" " +req.body.societe + " a ajouter du " + marque[0].nom  + " "+" Veuillez-vous connecter pour vérifier les informations relatives au produit.a."
          };
          orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                orangeSms(options)
                .then((responseOrangeSms)=>{
                  console.log(responseOrangeSms);

                }).catch((error)=>{
                  console.log(error);
                });

      
         
 
            return res.status(200).json(produit);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}





module.exports.addVaccination = async function(req, res){
    try{
        let produit = Vaccination.insertMany(req.body);

         if (produit) {
            return res.status(200).json(produit);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.updateProduit = async function(req, res){
    const io = req.app.get('io');
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id});
         produit[0].unite = req.body.unite;
   produit[0].etat = req.body.etat;
        produit[0].societe = req.body.societe;
        produit[0].categorie_id = req.body.categorie_id;
        produit[0].prix_deuxieme = req.body.prix_deuxieme;
        produit[0].type = req.body.type;
        produit[0].pays = req.body.pays;
        produit[0].devise = req.body.devise;
        produit[0].prix = req.body.prix;
        produit[0].flash = req.body.flash;
        produit[0].ville = req.body.ville;
        produit[0].zone = req.body.zone;
        produit[0].promo= req.body.promo;
        produit[0].image = req.body.image;
        produit[0].description = req.body.description;
        produit[0].distributeur_id = req.body.distributeur_id;
       produit[0].status= req.body.status;
        produit[0].save().then(() => {
            io.emit('payement_construct_emit');
        });

        if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.deleteProduit = async function(req, res){
    id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id});

        produit[0].delete = 1;
        produit[0].save();

        if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProduitsF = async function(req, res){
let  id = req.params.id;
    try{


        let produit = await Produit.find({"delete": 0,"distributeur_id": id,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
         if (produit) {

           console.log("produit",produit);
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getPassportById = async function(req, res){
    try{
        
       let passport = await Passport.find({_id: req.params.id});
       if (passport) {
           
      return res.status(200).json(passport);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProduits = async function(req, res){
    try{
        
        
        let produit = await Produit.find({"delete": 0,"validation":1}).sort({"createdAt": -1}).populate('categorie_id');
         if (produit) {

           console.log("produit",produit);
      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
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


 





  
module.exports.getAllProduitByDistributeur = async function(req, res){
    const { page = req.params.page, limit = 10 } = req.query;
    try{
        const options = {
            page: page,
            limit: limit,
            populate: {
              path: 'categorie_id'
            }
          };
        //let produit = await Produit.find({"delete": 0}).sort({"createdAt": -1}).populate('categorie_id');
       const articles = await Produit.paginate({}, options);
       
    console.log("data",articles);
      
      if (articles) {

      return res.status(200).json(articles);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getPaginatedProduits = async function(req, res){
    const { page = req.params.page, limit = 5} = req.query;
  
    try{
        const options={
            page: page,
            limit: limit,
            populate:{
                path: 'categorie_id'
            }
        }
        console.log(options)
        // let produit = await Produit.find({"delete": 0, "distributeur_id": req.params.user_id}).sort({"createdAt": -1}).populate('categorie_id');
        const produit = await Produit.paginate({"distributeur_id": req.params.user_id,"delete": 0}, options);
        if (produit) {
            return res.status(200).json(produit);
             }
            else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getAllProduits = async function(req, res){
    try{
        let produit = await Produit.find({"delete": 0, "distributeur_id": req.params.user_id}).sort({"createdAt": -1}).populate('categorie_id');
         if (produit) {

      return res.status(200).json(produit);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.countProduit = async function(req, res){
    let user_id= req.params.user_id
    try{
        let produit = await Produit.find({"delete": 0,"distributeur_id": user_id })
        if (produit) {
            let nombreProduit = produit.length
                 return res.status(200).json(nombreProduit);
            } 
             else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getVaccination = async function(req, res){
    try{
        let produit = await Vaccination.find();

         if (produit) {
            return res.status(200).json(produit);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProduit = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0}).populate('categorie_id');;

         if (produit) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
