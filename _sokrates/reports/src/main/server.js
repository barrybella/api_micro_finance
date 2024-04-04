const express = require('express'),
     path = require('path'),
    
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    var passport = require('passport');
    const app = require('express')();
    //const https = require('https');
    //const fs = require('fs');
    app.use(express.static(path.join(__dirname, '/')));
    const port = process.env.PORT || 4000;
   
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
        );

     
        require('./models/Affaire');
        require('./models/Utilisateur');
        require('./models/Stock');
        require('./models/Service');
        require('./models/Levele');      
      require('./models/Projet');
        require('./models/Activiter');
        require('./models/User');
       
        require('./models/Passport');
        require('./models/Relation');
        require('./models/Pointage');
        require('./models/Agrega');
        require('./models/Vaccination');
        require('./models/Commande');
        require('./models/Distributeur');
        require('./models/Produit');
        require('./models/Favorie');
         require('./models/Carte');
        require('./models/Commande');
        require('./models/client');
        require('./models/Transporte');
        require('./models/Zone');
        require('./models/Categorie');
        require('./models/pays');
        require('./models/region');
        require('./models/commune');
        require('./models/Camion');
        require('./models/Position');
          const categorieRoutes = require('./routes/categorie.route');
        const userRoutes = require('./routes/user.route');
       
        const projetRoutes = require('./routes/projet.route');
        const pointageRoutes = require('./routes/pointage.route');
        const produitRoutes = require('./routes/produit.route');
        const zoneRoutes = require('./routes/zone.route');
        const commandeRoutes = require('./routes/commande.route');

    app.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401);
            res.json({"message" : err.name + ": " + err.message});
        }
    });

    app.use(bodyParser.json());
    app.use(cors());
    app.use('/users', userRoutes);
    app.use('/chantiers', projetRoutes);
 
  
    app.use('/pointages', pointageRoutes);
    app.use('/categories', categorieRoutes); 
    app.use('/produits', produitRoutes);
    app.use('/zones', zoneRoutes);
    app.use('/commandes', commandeRoutes);
    require('./config/passport');
    // const dotenv = require("dotenv");
    require("dotenv").config();
    app.use(passport.initialize());

    
   // const http = require('http').Server(app);
    //const io = require('socket.io')(http);
    
    

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
     var io = require('socket.io').listen(server);
     app.set('io', io);
    });  //SEERVEUR VPS
    
    
    //Add the below statement to your controller code
   
