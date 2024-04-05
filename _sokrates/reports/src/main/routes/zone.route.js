const express = require('express');
var jwt = require('express-jwt');
 const zoneRoutes = express.Router();
 
var auth = jwt({
  secret: 'MY_SECRET', 
  userProperty: 'payload',
  algorithms: ['HS256']
});



zoneCotrollers = require('../controllers/zoneControllers');
paysCotrollers = require('../controllers/pays');
commentaireControllers = require('../controllers/commentaire');
regionCotrollers = require('../controllers/regions');
communeCotrollers = require('../controllers/commune');
statutCotrollers = require('../controllers/statut');
clientCotrollers = require('../controllers/client');
statutCommandeCotrollers = require('../controllers/statutProduitCommande');

zoneRoutes.route('/addPosition').post(auth, zoneCotrollers.addPosition);
zoneRoutes.route('/getPaginatedZones/:page').get(zoneCotrollers.getPaginatedZones);
zoneRoutes.route('/addChauffeur').post(auth, zoneCotrollers.addChauffeur);
zoneRoutes.route('/allChauffeur').get(zoneCotrollers.allChauffeur);
zoneRoutes.route('/countChauffeur').get(zoneCotrollers.countChauffeur);

zoneRoutes.route('/rechercheQuartier/:id').get(zoneCotrollers.rechercheQuartier);
zoneRoutes.route('/rechercheZone/:id').get(zoneCotrollers.rechercheZone);


zoneRoutes.route('/allzones/:id').get(zoneCotrollers.allzones);

zoneRoutes.route('/updateChauffeur/:id').put(zoneCotrollers.updateChauffeur);

zoneRoutes.route('/getAllPosition/:id/:id_commande').get(zoneCotrollers.getAllPosition);
zoneRoutes.route('/deletePosition/:id').get(zoneCotrollers.deletePosition);

zoneRoutes.route('/deleteTransport/:id').get(zoneCotrollers.deleteTransport);

zoneRoutes.route('/deleteChauffeur/:id').get(zoneCotrollers.deleteChauffeur);
zoneRoutes.route('/getChauffeur/:id').get(zoneCotrollers.getChauffeur);

zoneRoutes.route('/viewTransport/:id').get(zoneCotrollers.viewTransport);
zoneRoutes.route('/addTransport/:id').post(zoneCotrollers.addTransport);


zoneRoutes.route('/addCamion').post(auth, zoneCotrollers.addCamion);
zoneRoutes.route('/deleteCamion/:id').get(zoneCotrollers.deleteCamion);
zoneRoutes.route('/getCamion/:id').get(zoneCotrollers.getCamion);
zoneRoutes.route('/getCamionById/:id').get(zoneCotrollers.getCamionById);

zoneRoutes.route('/updateCamion/:id').put(auth, zoneCotrollers.updateCamion);

zoneRoutes.route('/addPlage').post(auth, zoneCotrollers.addPlage);
zoneRoutes.route('/deletePlage/:id/:id_zone').get(zoneCotrollers.deletePlage);
zoneRoutes.route('/viewPlage/:id').get(zoneCotrollers.Plage);
zoneRoutes.route('/addZone').post(auth, zoneCotrollers.addZone);
zoneRoutes.route('/addZones').post(auth, zoneCotrollers.addZones);

zoneRoutes.route('/QuartierByZone/:id').get(zoneCotrollers.QuartierByZone);

zoneRoutes.route('/getZonesPlage/:id').get(zoneCotrollers.getZonesPlage);

zoneRoutes.route('/getZoness').get(zoneCotrollers.getZoness);
zoneRoutes.route('/getZonesF/:id').get(zoneCotrollers.getZonesF);
zoneRoutes.route('/countZone').get(zoneCotrollers.countZone);
zoneRoutes.route('/getZones').get(zoneCotrollers.getZones);
zoneRoutes.route('/getZone/:id').get(zoneCotrollers.getZone);
zoneRoutes.route('/updateZone/:id').put(zoneCotrollers.updateZone);
zoneRoutes.route('/deleteZone/:id').get(auth, zoneCotrollers.deleteZone);






// Les routes pour le controller pays
zoneRoutes.route('/addPays').post(auth, paysCotrollers.addPays)
zoneRoutes.route('/updatePays/:id').put(auth, paysCotrollers.updatePays);
zoneRoutes.route('/getAllPays').get(auth, paysCotrollers.getAllPays);
zoneRoutes.route('/getPaysById/:id').get(auth, paysCotrollers.getPaysById);
zoneRoutes.route('/deletePays/:id').delete(auth, paysCotrollers.deletePays);


// Les routes pour le controller pays
zoneRoutes.route('/addPays').post(auth, paysCotrollers.addPays)
zoneRoutes.route('/updatePays/:id').put(auth, paysCotrollers.updatePays);
zoneRoutes.route('/getAllPays').get(auth, paysCotrollers.getAllPays);
zoneRoutes.route('/getPaysById/:id').get(auth, paysCotrollers.getPaysById);
zoneRoutes.route('/deletePays/:id').delete(auth, paysCotrollers.deletePays);


zoneRoutes.route('/addRegion').post(auth, regionCotrollers.addRegion);
 zoneRoutes.route('/updateRegion/:id').put(auth, regionCotrollers.updateRegion);
 zoneRoutes.route('/getRegionById/:id').get(auth, regionCotrollers.getRegionById);
 zoneRoutes.route('/deleteRegion/:id').delete(auth, regionCotrollers.deleteRegion);
 zoneRoutes.route('/getRegionByPaysId/:id').get(auth, regionCotrollers.getRegionByPaysId);
 zoneRoutes.route('/getAllRegion').get(auth, regionCotrollers.getAllRegion);

 zoneRoutes.route('/addStatut').post(auth, statutCotrollers.addStatut);
 zoneRoutes.route('/updateStatut/:id').put(auth, statutCotrollers.updateStatut);
 zoneRoutes.route('/getStatutById/:id').get(auth, statutCotrollers.getStatutById);
 zoneRoutes.route('/deleteStatut/:id').delete(auth, statutCotrollers.deleteStatut);
 zoneRoutes.route('/getAllStatut').get(auth, statutCotrollers.getAllStatut);

 zoneRoutes.route('/addStatutCommande').post(auth, statutCommandeCotrollers.addStatutCommande);
 zoneRoutes.route('/getStatutByProduitId/:id').get(auth, statutCommandeCotrollers.getStatutByProduitId);
 zoneRoutes.route('/getStatutByProduitIds/:id').get(auth, statutCommandeCotrollers.getStatutByProduitIds);
 zoneRoutes.route('/deleteStatutCommade').post(auth, statutCommandeCotrollers.deleteStatutCommade);
 zoneRoutes.route('/updateStatutCommande').put(auth, statutCommandeCotrollers.updateStatutCommande);
 
 
 
 zoneRoutes.route('/getCamionByCommande/:id').get(auth, zoneCotrollers.getCamionByCommande);

 zoneRoutes.route('/getCamionByChauffeur/:id').get(auth, zoneCotrollers.getCamionByChauffeur);

 zoneRoutes.route('/getAllCommuneByZone/:id').get(auth, communeCotrollers.getAllCommuneByZone);

 zoneRoutes.route('/getAllCommuneByRegion/:id').get(auth, communeCotrollers.getAllCommuneByRegion);

 zoneRoutes.post('/addCommune',auth, communeCotrollers.addCommune);
zoneRoutes.route('/updateCommune/:id').put(auth, communeCotrollers.updateCommune);
zoneRoutes.route('/getCommuneById/:id').get(auth, communeCotrollers.getCommuneById);
zoneRoutes.route('/deleteCommune/:id').delete(auth, communeCotrollers.deleteCommune);
 zoneRoutes.route('/getCommuneByRegionId/:id').get(auth, communeCotrollers.getCommuneByRegionId);
zoneRoutes.route('/getAllCommune').get(auth, communeCotrollers.getAllCommune);



// Les routes pour le controller client
zoneRoutes.route('/addClient').post(auth, clientCotrollers.addClient)
zoneRoutes.route('/updateClient/:id').put(auth, clientCotrollers.updateClient);
zoneRoutes.route('/getPaginatedClient/:id').get(auth, clientCotrollers.getPaginatedClient);
zoneRoutes.route('/getAllClient').get(auth, clientCotrollers.getAllClient);
zoneRoutes.route('/getClientById/:id').get(auth, clientCotrollers.getClientById);
zoneRoutes.route('/deleteClient/:id').delete(auth, clientCotrollers.deleteClient);


zoneRoutes.route('/addCommentaire').post(commentaireControllers.addCommentaire)
zoneRoutes.route('/updateCommentaire/:id').put(commentaireControllers.updateCommentaire);
zoneRoutes.route('/getPaginatedCommentaire').get(commentaireControllers.getPaginatedCommentaire);
zoneRoutes.route('/getfile/:File').get(commentaireControllers.getImageFile);
zoneRoutes.route('/getAllCommentaire').get(commentaireControllers.getAllCommentaire);
zoneRoutes.route('/getCommentaireByProduitId').post(commentaireControllers.getCommentaireByProduitId);
zoneRoutes.route('/getCommentaireById/:id').get(commentaireControllers.getCommentaireById);
zoneRoutes.route('/deleteCommentaire/:id').delete(commentaireControllers.deleteCommentaire);


module.exports = zoneRoutes;
