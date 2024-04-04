const mongoose= require('mongoose')
const Commentaire= require('../models/commentaire')
const Commande= require('../models/Commande')

const User = require('../models/User')
var globalVariable= require("../controllers/globalVariable")
const path = require('path');
const fs = require("fs")



module.exports.getImageFile = function (req, res) {
  var image_file = req.params.File;
  var path_file = './' + image_file;
  fs.exists(path_file, (exists) => {
    if (exists) {
      res.sendFile(path.resolve(path_file));
    }
  });
}

module.exports.addCommentaire = async function(req, res){
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

  console.log("utilisateur",user)
  let commande = await Commande.find({"_id":req.body.idCommande});
  let commandes = await Commande.find({"_id":req.body.idCommande});

  user.forEach(result => {

    if(result._id == req.body.user_id) {

      var mailOptions = {                                                                                       
        from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
        to: result.email, // list of receivers (who receives)                                     
        subject: 'Accusé de reception', // Subject line                                                                  
        text: 'Bonjour votre message est  envoyé avec succès ' // plaintext body 
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
  text: 'Bonjour un nouveau message concernant le dossier ' + commande[0].refrence + 'vous attend' + 'merci de vous connectez sur \n' + 'www.admin.bankitruck.com' // plaintext body 
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
text: 'Bonjour un nouveau message concernant le dossier ' + commandes[0].refrence + 'vous attend' + 'merci de vous connecter sur \n' + 'www.admin.e-agregats.bankitruck.com' // plaintext body 
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



                




 const  commentaire= new Commentaire()
 commentaire.user= req.body.user
 commentaire.idCommande= req.body.idCommande
 commentaire.image= globalVariable.filename || ''
 commentaire.comment= req.body.comment
  commentaire.save()


      

       .then(()=> res.status(201).json({message: "Le commentaire a été inseré avec succes"}))
       .catch(error=> console.log(error))
}

module.exports.updateCommentaire= function(req, res){
  Commentaire.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "Le commentaire a été modifié avec succes"}))
  .catch(error=> res.status(400).json(error))
}




module.exports.getAllCommentaire= function(req, res){
  const { page = req.params.page, limit = 10 } = req.query;

  let user_id = req.payload._id;

  const options = {
      page: page,
      limit: limit,
      populate: {
          path: 'fournisseur_id'
      },
      populate: {
          path: "produit_id",
          populate: {
              path: "categorie_id"
          }
      },
      sort: {
          "createdAt": -1
      }
  }

  Commentaire.find({})
  .then(commentaire=> res.status(201).json(commentaire))
  .catch(error=> res.status(400).json(error))
}

module.exports.getCommentaireByProduitId= function(req, res){
  
  
   
  Commentaire.find({idCommande: req.body.idCommande})
  .then(commentaire=> res.status(201).json(commentaire))
  .catch(error=> res.status(400).json(error))
}




module.exports.getPaginatedCommentaire=  async function(req, res){
  const { page = req.params.page, limit = 10 } = req.query;
  const options = {
      page: page,
      limit: limit,
      // populate: {
      //     path: 'fournisseur_id'
      // },
      // populate: {
      //     path: "produit_id",
      //     populate: {
      //         path: "categorie_id"
      //     }
      // },
      sort: {
          "createdAt": -1
      }
  }
  try {
    let stock = await Commentaire.paginate({}, options)
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


module.exports.getCommentaireById= function(req, res){
  Commentaire.find({_id: req.params.id})
  .then(commentaire=> res.status(201).json(commentaire))
  .catch(error=> res.status(400).json(error))
}

module.exports.deleteCommentaire= function(req, res){
  Commentaire.deleteOne({_id: req.params.id})
  .then(()=> res.status(201).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
}