var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('Utilisateur');
var Distributeur = mongoose.model('Utilisateur');
var LocalStrategy = require('passport-local').Strategy;
// const dotenv = require("dotenv");

module.exports.register = function (req, res) {
  var user = new Distributeur();
  var generator = require('generate-password');
  user.name = req.body.name;
  user.role = req.body.role;
  user.photo = req.body.photo;
   user.coordonner = req.body.coordonner;
   user.localisation = req.body.localisation;
   user.commune = req.body.commune;
   user.ville = req.body.ville;
   user.prenom = req.body.prenom;
   user.numero = req.body.numero;
   user.piece = req.body.piece;
   user.date_naissance = req.body.date_naissance;
   user.lieu_naissance = req.body.lieu_naissance;
  user.zone = req.body.zone;
  user.email = req.body.email;
  user.tel = req.body.tel;
  var password = generator.generate({
    length: 7,
    numbers: true
  });
var t = req.body.commune;
var ts = t.substring(0,3);
var reference = ts+password ;
user.reference = reference ;

  user.setPassword(password);
  user.save();
  console.log("pass",password);
  if (user) {
 
  let name=req.body.name;
  let tel=req.body.tel;
  let pass=password;
  let role=req.body.role;
  const options = {
    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
    area_code:"+224", // String; Telephony code of your country Ex: +237
    sender_number: tel, // Number; The number to which you are sending a message without area code
    sender_phone: tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
    sms_body: "Bonjour Mr/Mme " + name + " votre compte " + role + " a été créé(e) avec succès :\n" + "Identifant: "+ tel + "\nMot de passe: "+ pass +"\n"// String; Your message text to send, not much than 160 characters otherwise Orange will cut it
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

else {
    return res.status(404).send(new Error('Erreur 404...'))
  }
 
};

module.exports.reset = async function(req, res){
  var user = new Distributeur();
  var generator = require('generate-password');
  let tel = req.body.email;
  // var codes = generator.generate({
  //   length: 6,
  //   numbers: true
  // });
  var rn = require('random-number');
  var options = {
      min:  0
      , max:  10000
      , integer: true
  }
  var codes = rn(options)
  let users = await User.find({"tel":tel}).sort({"createdAt": -1});
  console.log("bella",users);
  users[0].codes = codes;
  users[0].save();
  if (users[0]) {
  let tel = req.body.email;
  console.log("telephone",tel);
  let code = codes;
  const options = {
    authorization_header:"Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
    area_code:"+224", // String; Telephony code of your country Ex: +237
    sender_number: tel, // Number; The number to which you are sending a message without area code
    sender_phone: tel, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
    sms_body: "votre code de reinitialisation  est " + code + "\n"// String; Your message text to send, not much than 160 characters otherwise Orange will cut it
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

else {
    return res.status(404).send(new Error('Erreur 404...'))
  }
 
};
module.exports.login = function (req, res) {
  username = req.body.email;
  password = req.body.password;

  Distributeur.findOne( { $or: [ { "tel": username }, { "email": { "$eq": username} } ], "active": 0 }, function (err, user) {
    if (err) {
      res.status(404).json(err);
      return;
    }
    // Return if user not found in database
    if (!user) {
      // return new Error('úser not dound');
      return res.json(false);
    }
    // Return if password is wrong
    if (!user.validPassword(password)) {
      return res.json(false);
    }
        // If credentials are correct, return the user object
      if(user){
        var token;
        token = user.generateJwt();
        // console.log('TOKEN:', token);
        res.status(200);
        res.json({
          "token" : token
        });
        process.env.MY_SECRET = token;
      }else{
        return res.json(false);
      }
      //  return res.status(200).json(user)
    });

};
