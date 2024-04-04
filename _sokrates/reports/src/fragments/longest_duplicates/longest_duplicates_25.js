controllers/commandeControllers.js [1581:1611]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
    user.forEach(result => {

      
       result.roles.forEach(results =>{
         if(results.role == 'Sadmin' ){
          
          // setup e-mail data                                                                                      
   var mailOptions = {                                                                                       
     from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
     to: result.email, // list of receivers (who receives)                                     
     subject: 'Commande', // Subject line                                                                  
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/commandeControllers.js [1666:1696]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
     user.forEach(result => {

       
        result.roles.forEach(results =>{
          if(results.role == 'Sadmin' ){
           
           // setup e-mail data                                                                                      
    var mailOptions = {                                                                                       
      from: '"Bankitruck" <bella@bankitruck.com>', // sender address (who sends)                          
      to: result.email, // list of receivers (who receives)                                     
      subject: 'Commande', // Subject line                                                                  
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



