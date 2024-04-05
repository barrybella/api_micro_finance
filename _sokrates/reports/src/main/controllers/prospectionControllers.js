//var Prospection = require('../models/Prospection');
var User = require('../models/Utilisateur');
var Distributeur = require('../models/Utilisateur');
var Ingenieur = require('../models/Affaire');
var Conversation = require('../models/Conversation');

var passport = require('passport');

module.exports.deleteRelation = async function(req, res){
    let id =req.params.id;

    try{
        let prospection = await Ingenieur.find({"delete": 0}).sort({"createdAt": -1});
        prospection[0].delete = 1;
        prospection[0].save();
       if (prospection[0]) {
           return res.status(200).json(prospection[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addProspection = async function(req, res){
    try{
        let prospection = Prospection.insertMany(req.body);

         if (Prospection) {
            return res.status(200).json(prospection);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addCommentaire  = async function(req, res){
    //let user=req.body.client_id;
        
    console.log("id",user);
        try{
            var user = new  Conversation();
           
          
            user.contenu = req.body.contenu;
            user.ingenieur_id = req.body.ingenieur_id;
            user.user_id = req.body.client_id;
            user.save();
           


    if(user)
            {    
            return res.status(200).json(user);
           }
    
    
        } catch (error) {
            return res.status(500).send(new Error('Server Error...'))
        }

        
   
}
module.exports.viewConversation = async function(req, res){
    let id =req.params.id;
    
    try{
        let ingenieur = await Conversation.find({"delete": 0,"ingenieur_id":id}).sort({"createdAt": -1}).populate('user_id');
        console.log("bella",ingenieur);
        if (ingenieur) {
           
      return res.status(200).json(ingenieur);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.verifieProspection = async function(req, res){
    let id = req.params.tel;

    try{
        let user = await User.find({"tel": id});
      
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
    
    
}


module.exports.getConversationById = async function(req, res){
    let id =req.params.id;
    try{
        
        
        let ingenieur = await Ingenieur.find({"delete": 0,"_id":id}).sort({"createdAt": -1});
       if (ingenieur) {
           
      return res.status(200).json(ingenieur);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProspectionById = async function(req, res){
    let id =req.params.id;
    try{
        
        
        let prospection = await Prospection.find({"delete": 0,"_id":id}).sort({"createdAt": -1});
       if (prospection) {
           
      return res.status(200).json(prospection);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.deleteProspection = async function(req, res){
    let id =req.params.id;

    try{
        let prospection = await Prospection.find({"delete": 0}).sort({"createdAt": -1});
        prospection[0].delete = 1;
        prospection[0].save();
       if (prospection[0]) {
           return res.status(200).json(prospection[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.AutoriseProspections = function (req, res) {
   
    let id =req.params.id;
    let user_id =req.params.user_id;
    let name =req.params.name;
    let tel =req.params.tel;
    let email =req.params.email;
    let role =req.params.role;
    var object = {
        prospection_id: id,
        user_id: user_id,  
        statu: 1
    };

    Ingenieur.insertMany(object);
   Prospection.find({ "_id" : id }).exec()
    .then(items =>[
   
      items[0].statu = 1,
      items[0].save(),
      ]
     
      ).catch(err => {  });

    var user = new Distributeur();
    var generator = require('generate-password');
    user.name = req.params.name;
    user.role = req.params.role;
    user.user_id = req.params.user_id;
    user.email = req.params.email;
    user.tel = req.params.tel;
    var password = generator.generate({
      length: 7,
      numbers: true
    });
    user.setPassword(password);
    user.save();
    console.log("pass",password);
    if (user) {
   
    let name=req.params.name;
    let tel=req.params.tel;
    let pass=password;
    
    const options = {
      authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
      area_code:"+224", // String; Telephony code of your country Ex: +237
      sender_number: tel, // Number; The number to which you are sending a message without area code
      sender_phone: tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
      sms_body: "Bonjour Mr/Mme " + name + " vous avez un client a prospecter veillez vous connecter dans votre compte prospection pour plus d'infromation " + "\nIdentifant: "+ tel + "\nMot de passe: "+ pass +"\n"// String; Your message text to send, not much than 160 characters otherwise Orange will cut it
    };
    const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
          orangeSms(options)
          .then((responseOrangeSms)=>{
            console.log(responseOrangeSms); 
          
          }).catch((error)=>{
            console.log(error);
          });
    return res.status(200).json(user);
   
  }
 else{
      return res.status(404).send(new Error('Erreur 404...'))
    }
   
  }

module.exports.AutoriseProspection = async function(req, res){
    let id =req.params.id;
    let user_id =req.params.user_id;
    let name =req.params.name;
    let tel =req.params.tel;
    let email =req.params.email;
    let role =req.params.role;
console.log("id",id);
console.log("user_id",user_id);
console.log("tel",tel);
console.log("email",email);
console.log("role",role);
    try{
        let users = await User.find({"tel":req.params.tel}).sort({"createdAt": -1});
        
if(users)
        {
          
      
   Prospection.find({ "_id" : id }).exec()
    .then(items =>[
   
      items[0].statu = 1,
      items[0].save(),
      ]
     
      ).catch(err => {  });

            var object = {

                prospection_id: id,
                user_id: user_id,  
                statu : 1
            };
        
            Ingenieur.insertMany(object);
            let name=req.params.name;
            let tel=req.params.tel;
           
            
            const options = {
              authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
              area_code:"+224", // String; Telephony code of your country Ex: +237
              sender_number: req.params.tel, // Number; The number to which you are sending a message without area code
              sender_phone: req.params.tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
              sms_body: "Bonjour Mr/Mme " + req.params.name + " vous avez un client a prospecter veillez vous connecter dans votre compte prospection pour plus d'infromation " // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
            };
            const orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
                  orangeSms(options)
                  .then((responseOrangeSms)=>{
                    console.log(responseOrangeSms); 
                  
                  }).catch((error)=>{
                    console.log(error);
                  });
                  return res.status(200).json(users[0]);
    }


    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProspection = async function(req, res){
    
    try{
        
        
        let prospection = await Prospection.find({"delete": 0,"statu":0}).sort({"createdAt": -1});
       if (prospection) {
           
      return res.status(200).json(prospection);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProspectionAttente = async function(req, res){
    let user_id=req.payload.user_id;
    console.log("attente",user_id);
    try{
        
    
        let prospection = await Ingenieur.find({"delete": 0,"user_id":user_id,"statu":1}).sort({"createdAt": -1}).populate('prospection_id');
       if (prospection) {
           
      return res.status(200).json(prospection);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getProspectionIngenieur = async function(req, res){
    
    
    try{
        
    
        let prospection = await Ingenieur.find({"delete": 0,"statu":1}).sort({"createdAt": -1}).populate('prospection_id');
       if (prospection) {
           
      return res.status(200).json(prospection);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getProspectionTraite = async function(req, res){
    
    try{
        
        
        let prospection = await Prospection.find({"delete": 0}).sort({"createdAt": -1});
       if (prospection) {
           
      return res.status(200).json(prospection);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.updateProspection = async function(req, res){
    
    let id = req.params.id;
    try{
        let prospection = await Prospection.find({"delete": 0,"_id":id}).sort({"createdAt": -1});
       prospection[0].designation = req.body.designation;
       prospection[0].secteur = req.body.secteur;
       prospection[0].responsable = req.body.responsable;
       prospection[0].siege = req.body.siege;
       prospection[0].date_rendez_vous = req.body.date_rendez_vous;
       prospection[0].heure_rendez_vous = req.body.heure_rendez_vous;
       prospection[0].type = req.body.type;
       prospection[0].save();

  
         if (prospection[0]) {
             console.log("zone", prospection[0]);
            return res.status(200).json(prospection[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
    
}
