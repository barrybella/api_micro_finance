module.exports = (orangeApiOptions)=>{
    return new Promise((resolve)=>{
         const request = require('request');
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
                 if (!error && response.statusCode == 201) {
                   //resolve({payement:'payement effectuer '});
                   console.log(body)
                   //return response.JSON.stringify(body);
                   return  response(body);
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