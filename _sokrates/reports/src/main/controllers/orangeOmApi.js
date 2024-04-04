module.exports = (orangeApiOptions)=>{
  return new Promise((resolve)=>{

       const request = require('request');
const Commande = require('../models/Commande');
     const getToken = require('./TokenOM.js')(orangeApiOptions.authorization_header);
           getToken.then((response)=>{
             const headers = {
               'Authorization': `Bearer ${response}`,
               'Content-Type': 'application/json',
               'Accept': 'application/json'};
           const body = { 
              merchant_key : `${orangeApiOptions.merchant_key}`, 
                currency : `${orangeApiOptions.currency}`,
                order_id:`${orangeApiOptions.order_id}`,
                amount:`${orangeApiOptions.amount}`,
                return_url:`${orangeApiOptions.return_url}`,
                cancel_url:`${orangeApiOptions.cancel_url}`,
                notif_url:`${orangeApiOptions.notif_url}`,
                lang:`${orangeApiOptions.lang}`,
               reference:`${orangeApiOptions.reference}`
         
          }; 
          
              const options = {
             //   uri: `https://api.orange.com/orange-money-webpay/cm/v1/webpayment/${orangeApiOptions.marchant_key}&${orangeApiOptions.currency}&${orangeApiOptions.order_id}&${orangeApiOptions.amount}&${orangeApiOptions.currency}&${orangeApiOptions.return_url}&${orangeApiOptions.cancel_url}&${orangeApiOptions.notif_url}&${orangeApiOptions.lang}&${orangeApiOptions.reference}`,
                uri: 'https://api.orange.com/orange-money-webpay/gn/v1/webpayment',
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)};
                
                
             const sendSmsRequest = request(options, (error, response, body)=> {

              
              var pai=body;
              var parsed = JSON.parse(pai);
              var user=parsed['pay_token'];
             
              const bod = { 
                  order_id:`${orangeApiOptions.order_id}`,
                  amount:`${orangeApiOptions.amount}`,
                  pay_token:`${user}`
                }; 
            const option = {
              //   uri: `https://api.orange.com/orange-money-webpay/cm/v1/webpayment/${orangeApiOptions.marchant_key}&${orangeApiOptions.currency}&${orangeApiOptions.order_id}&${orangeApiOptions.amount}&${orangeApiOptions.currency}&${orangeApiOptions.return_url}&${orangeApiOptions.cancel_url}&${orangeApiOptions.notif_url}&${orangeApiOptions.lang}&${orangeApiOptions.reference}`,
                 uri: 'https://api.orange.com/orange-money-webpay/gn/v1/transactionstatus',
                 method: 'POST',
                 headers: headers,
                 body: JSON.stringify(bod)
                };
                 const sendSmSRequest = request(option, (error, respons, body)=>{
                  console.log("bella barry",body);
                 
                 });
             
             
              var pai=body;
                var parsed = JSON.parse(pai);
                var notif_token=parsed['notif_token'];
                var pay_token=parsed['pay_token'];
                var status_pay = "INITIATED";
               // console.log("token",user);
              Commande.find({ "_id" : `${orangeApiOptions.order_id}` }).exec()
                  .then(items =>[
                   items[0].commission = items[0].quantite*2000,
                    items[0].notif_token = notif_token,
                    items[0].pay_token = pay_token,
                    items[0].status = 1,
                    items[0].status_relation = 2,
                    items[0].status_pay = status_pay,
                    items[0].save(),
                    console.log(items[0].notif_token)]
                   
                    ).catch(err => {  });
              
               if (!error && response.statusCode == 201) {

                
               
               // var bella="bonjour";
                var pai=body;
                var parsed = JSON.parse(pai);
                var user=parsed['pay_token'];
                console.log("bella barry",user);
                
                resolve(body);

              
               }else {
                 resolve({payement:response.statusCode});
                 console.log(body);
               }
             });



           }).catch((error)=>{ 
             console.log(error.body);
           });
  });
}
