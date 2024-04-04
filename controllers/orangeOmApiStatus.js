const { createBrotliDecompress } = require('zlib');

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
              const bod = { 
                  order_id:`${orangeApiOptions.order_id}`,
                  amount:`${orangeApiOptions.amount}`,
                  pay_token:`${orangeApiOptions.pay_token}` 
                }; 
            const option = {
              //   uri: `https://api.orange.com/orange-money-webpay/cm/v1/webpayment/${orangeApiOptions.marchant_key}&${orangeApiOptions.currency}&${orangeApiOptions.order_id}&${orangeApiOptions.amount}&${orangeApiOptions.currency}&${orangeApiOptions.return_url}&${orangeApiOptions.cancel_url}&${orangeApiOptions.notif_url}&${orangeApiOptions.lang}&${orangeApiOptions.reference}`,
                 uri: 'https://api.orange.com/orange-money-webpay/gn/v1/transactionstatus',
                 method: 'POST',
                 headers: headers,
                 body: JSON.stringify(bod)
                };
                 const sendSmSRequest = request(option, (error, respons, body)=>{
                  
              
               if (!error && respons.statusCode == 201) {

                  var pai=body;
                  var parsed = JSON.parse(pai);
                  var status=parsed['status'];
                 
                
                Commande.find({ "_id" : `${orangeApiOptions.order_id}` }).exec()
                    .then(items =>[
                   
                      items[0].status_pay = status,
                      items[0].save(),
                      ]
                     
                      ).catch(err => {  });
              
               
                
                resolve(body);

              
               }else {
                 resolve({payement:respons.statusCode});
                 console.log(body);
               }
           });



           }).catch((error)=>{ 
             console.log(error.body);
           });
  });
}
