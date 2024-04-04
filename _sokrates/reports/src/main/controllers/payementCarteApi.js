module.exports = (orangeApiOptions)=>{
    return new Promise((resolve)=>{
         const request = require('request');
       const getToken = require('./getTokenCarte.js')(orangeApiOptions.authorization_header);
             getToken.then((response)=>{
               const headers = {
                 'Authorization': `Bearer ${response}`,
                 'Content-Type': 'application/vnd.ni-payment.v2+json',
                 'Accept': 'application/vnd.ni-payment.v2+json'};
                 const body = { 
                    action : `${orangeApiOptions.action}`, 
                      //currency : `${orangeApiOptions.currency}`,
                     // order_id:`${orangeApiOptions.order_id}`,
                     // billingAddress.firstName
                     amount: {
                        currencyCode: `${orangeApiOptions.currencyCode}`,
                        value: `${orangeApiOptions.value}`
                      },
                      emailAddress: `${orangeApiOptions.emailAddress}`, 
                      billingAddress: {
                        firstName: `${orangeApiOptions.firstName}`,
                        lastName: `${orangeApiOptions.lastName}`
                      },
               
                };   
               const options = {
                  uri: `https://api-gateway.sandbox.ngenius-payments.com/transactions/outlets/8b6d8f8b-870a-4877-a2fa-343f67aabb9f`,
                  method: 'POST',
                  headers: headers,
                  body: JSON.stringify(body)};
               const sendSmsRequest = request(options, (error, response, body)=> {
                 if (!error && response.statusCode == 201) {
                   resolve({message:body});
                   console.log(options);
                 }else {
                   resolve({message:response.statusCode});
                 }
               });
             }).catch((error)=>{ 
               console.log(error.body);
             });
    });
  }