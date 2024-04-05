controllers/commandeControllers.js [2880:2958]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [3005:3083]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



