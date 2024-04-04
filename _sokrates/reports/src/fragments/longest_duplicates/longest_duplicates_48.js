controllers/authentication.js [62:81]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/authentification.js [40:59]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



