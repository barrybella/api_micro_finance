module.exports = (dataObject)=>{
    return new Promise((resolve)=>{
      // here we do some checks on the data structure passed as a parameter
      // First we check if dataObject is an object
      if(typeof(dataObject) === "object" && dataObject.constructor === Object){
        // Second we check if dataObject have all the required keys and if the keys are not equals to null or undefined
        const dataObjectKeys = Object.keys(dataObject);
        if(dataObjectKeys.length == 5){
          resolve({message:"You have to provide all the keys of the object"});
        }
        
        else{
          if(dataObjectKeys.includes('authorization_header') === true && dataObjectKeys.includes('marchant_key') === true || dataObjectKeys.includes('currency') === true ||dataObjectKeys.includes('order_id') === true ||dataObjectKeys.includes('amount') === true || dataObjectKeys.includes('return_url') === true || dataObjectKeys.includes('cancel_url') === true|| dataObjectKeys.includes('notif_url') === true|| dataObjectKeys.includes('lang') === true|| dataObjectKeys.includes('reference') === true){
            const dataObjectValues = Object.values(dataObject);
               if(dataObjectValues.includes(null) === true || dataObjectValues.includes(undefined) === true){
                resolve({message:"the object key must not have a value like null or undefined"});
               }else{
                   // Good to Go
                   require("./orangeOmApi.js")(dataObject)
                   .then((responseOrangeSmsApi)=>{
                 resolve(responseOrangeSmsApi);
                   });
            }
          }else{
            resolve({message:"One or more object keys are incorrectly written"});
          }
        }
      }else{
           resolve({message:"The parameter must be an object"});
      }
    });
   };