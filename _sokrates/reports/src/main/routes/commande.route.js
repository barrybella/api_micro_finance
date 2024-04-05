const express = require('express');
var jwt = require('express-jwt');
 const commandeRoutes = express.Router();

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
  algorithms: ['HS256']
});

commandeCotrollers = require('../controllers/commandeControllers');

prospectionCotrollers = require('../controllers/prospectionControllers');
commandeRoutes.route('/addProspection').post(prospectionCotrollers.addProspection);
commandeRoutes.route('/viewConversation/:id').get(prospectionCotrollers.viewConversation);
commandeRoutes.route('/addConversation').post(prospectionCotrollers.addCommentaire );
commandeRoutes.route('/AutoriseProspection/:id/:user_id/:name/:email/:tel/:role').get(auth, prospectionCotrollers.AutoriseProspection);
commandeRoutes.route('/AutoriseProspections/:id/:user_id/:name/:email/:tel/:role').get(auth, prospectionCotrollers.AutoriseProspections);
commandeRoutes.route('/updateProspection/:id').put(auth, prospectionCotrollers.updateProspection);
commandeRoutes.route('/getProspectionById/:id').get(auth, prospectionCotrollers.getProspectionById);
commandeRoutes.route('/getConversationById/:id').get(auth, prospectionCotrollers.getConversationById);
commandeRoutes.route('/deleteRelation/:id').get(auth, prospectionCotrollers.deleteRelation);
commandeRoutes.route('/CommandeFournisseur/:id').get(auth, commandeCotrollers.CommandeFournisseur);
commandeRoutes.route('/validerProduit/:id/:idCommande').get(auth, commandeCotrollers.validerProduit);
commandeRoutes.route('/rejeterProduit/:id/:idCommande').get(auth, commandeCotrollers.rejeterProduit);
commandeRoutes.route('/getCommandTraiteForBankitruck/:page').get(commandeCotrollers.getCommandTraiteForBankitruck);
commandeRoutes.route('/paginatedCommandeAttenteForBankitruck/:page').get(commandeCotrollers.paginatedCommandeAttenteForBankitruck);
commandeRoutes.route('/commandeCount').post(commandeCotrollers.commandeCount);


commandeRoutes.route('/verifieProspection/:tel').get(auth, prospectionCotrollers.verifieProspection);
commandeRoutes.route('/getProspectionIngenieur').get(auth, prospectionCotrollers.getProspectionIngenieur);
commandeRoutes.route('/deleteProspection/:id').get(auth, prospectionCotrollers.deleteProspection);
commandeRoutes.route('/getProspectionAttente').get(auth, prospectionCotrollers.getProspectionAttente);
commandeRoutes.route('/getProspection').get(auth, prospectionCotrollers.getProspection);
commandeRoutes.route('/listeCommandeByidUser/:user_id').get( commandeCotrollers.listeCommandeByidUser);
commandeRoutes.route('/AllCommandeTraiteSC').get(auth, commandeCotrollers.AllCommandeTraiteSC);
commandeRoutes.route('/getAllCommandeStatusDifferentZeroByUserId/:user_id').get(auth, commandeCotrollers.getAllCommandeStatusDifferentZeroByUserId);
commandeRoutes.route('/AllCommandeTraiteAD').get(auth, commandeCotrollers.AllCommandeTraiteAD);

commandeRoutes.route('/livrerCommandeManquante').post(auth, commandeCotrollers.livrerCommandeManquante);
commandeRoutes.route('/updateStock/:id').put(auth, commandeCotrollers.updateStock);

commandeRoutes.route('/livrerProduit/:id/:id_commande').get(auth, commandeCotrollers.livrerProduit);

commandeRoutes.route('/StockById/:id').get(auth, commandeCotrollers.StockById);

commandeRoutes.route('/deleteStock/:id').get(auth, commandeCotrollers.deleteStock);


commandeRoutes.route('/AllCommandeTraiteByCarte/:id').get(auth, commandeCotrollers.AllCommandeTraiteByCarte);
commandeRoutes.route('/AllCommandeTraiteByDistributeur/:id').get(auth, commandeCotrollers.AllCommandeTraiteByDistributeur);

commandeRoutes.route('/AllCommandeAttenteDistributeurTraiteById/:id').get(auth, commandeCotrollers.AllCommandeAttenteDistributeurTraiteById);

//paypalControllers = require('../controllers/paypalController');
//commandeRoutes.route('/paypalTransaction').post(auth, paypalControllers.paypalTransaction);
//commandeRoutes.route('/paypalAutorisation').post(auth, paypalControllers.paypalAutorisation);

commandeRoutes.route('/paginatedCommandeAllTraiteForDistributeur/:page/:id').get(commandeCotrollers.paginatedCommandeTraiteForDistributeur);

commandeRoutes.route('/paginatedCommandeTraiteForDistributeurBanki/:page').get(commandeCotrollers.paginatedCommandeTraiteForDistributeurBanki);
commandeRoutes.route('/paginatedCommandeTraiteForDistributeurBank/:page/:id').get(commandeCotrollers.paginatedCommandeTraiteForDistributeurBank);

commandeRoutes.route('/paginatedCommandeTraiteForDistributeur/:page/:id').get(commandeCotrollers.paginatedCommandeTraiteForDistributeur);
commandeRoutes.route('/paginatedCommandeAttenteForDistributeurBank/:page/:id').get(commandeCotrollers.paginatedCommandeAttenteForDistributeurBank);


commandeRoutes.route('/paginatedCommandeAttenteForDistributeur/:page/:id').get(commandeCotrollers.paginatedCommandeAttenteForDistributeur);

commandeRoutes.route('/paginatedCommandeAttenteForDistributeurBanque/:page/:id').get(commandeCotrollers.paginatedCommandeAttenteForDistributeurBanque);
commandeRoutes.route('/PaginatedAllCommandeTraiteLivraisons/:page').get(commandeCotrollers.PaginatedAllCommandeTraiteLivraisons);
commandeRoutes.route('/PaginatedAllCommandeAttenteLivraisons/:page').get(commandeCotrollers.PaginatedAllCommandeAttenteLivraisons);
commandeRoutes.route('/chercherUneCommandeParSaReference').post(commandeCotrollers.chercherUneCommandeParSaReference);

commandeRoutes.route('/PaginatedCommandeAttenteDistributeurTraite/:page').get(commandeCotrollers.PaginatedCommandeAttenteDistributeurTraite);
commandeRoutes.route('/allPaginatedStock/:user_id/:page').get(auth, commandeCotrollers.allPaginatedStock);
commandeRoutes.route('/AllCommandeTel/:telephone').get(auth, commandeCotrollers.AllCommandeTel);
commandeRoutes.route('/allStockFournisseur/:id').get(auth, commandeCotrollers.allStockFournisseur);
commandeRoutes.route('/AllCommandeRejeter').get(auth, commandeCotrollers.AllCommandeRejeter);
commandeRoutes.route('/ListeCommission').get(auth, commandeCotrollers.ListeCommission);
commandeRoutes.route('/CommissionListe').get(auth, commandeCotrollers.CommissionListe);
commandeRoutes.route('/commission').get(auth,commandeCotrollers.commission);
commandeRoutes.route('/redicat').post(auth, commandeCotrollers.redicat);
commandeRoutes.route('/avanceClients').post(auth, commandeCotrollers.avanceClient);
commandeRoutes.route('/avance').post(auth, commandeCotrollers.avance);
commandeRoutes.route('/allStockTotal').get(auth, commandeCotrollers.allStockTotal);
commandeRoutes.route('/allStock/:user_id').get(auth, commandeCotrollers.allStock);
commandeRoutes.route('/countStock/:user_id').get(auth, commandeCotrollers.countStock);commandeRoutes.route('/addAprovisonement').post(auth, commandeCotrollers.addAprovisonement);
commandeRoutes.route('/addStock').post(auth, commandeCotrollers.addStock);
commandeRoutes.route('/notificationOM').post(auth, commandeCotrollers.notification);
commandeRoutes.route('/listeCommandeClient').get(auth, commandeCotrollers.listeCommandeClient);
commandeRoutes.route('/addCommandes').post(auth, commandeCotrollers.addCommandes);
commandeRoutes.route('/addCommande').post(commandeCotrollers.addCommande);
commandeRoutes.route('/attenteCommande').get(auth, commandeCotrollers.listeCommande);

commandeRoutes.route('/validerPackage/:commande_id').get(auth, commandeCotrollers.validerPackage);

commandeRoutes.route('/rejeterPackage/:commande_id').get(auth, commandeCotrollers.rejeterPackage);



commandeRoutes.route('/addLivraison/:id_commande/:id_panier').post(auth, commandeCotrollers.addLivraison);
commandeRoutes.route('/AllCommandeAttenteDistributeurTraite/:id').get(commandeCotrollers.AllCommandeAttenteDistributeurTraite);

commandeRoutes.route('/AllCommandeAttenteDistributeur/:id').get(commandeCotrollers.AllCommandeAttenteDistributeur);
commandeRoutes.route('/AllCommandeAttenteLivraison/:id').get(commandeCotrollers.AllCommandeAttenteLivraison);
commandeRoutes.route('/AllCommandeAttenteLivraisons/:id').get(commandeCotrollers.AllCommandeAttenteLivraisons);

commandeRoutes.route('/commandesTraiteesByDistributeur/:id').get(commandeCotrollers.commandesTraiteesByDistributeur);
commandeRoutes.route('/checkPositionStatusByCommande/:id').get(auth, commandeCotrollers.checkPositionStatusByCommande);

commandeRoutes.route('/livrerCommande/:id').get(commandeCotrollers.livrerCommande);
commandeRoutes.route('/listesCommandeAttente/:id').get(commandeCotrollers.listesCommandeAttente);
commandeRoutes.route('/listesCommandeTraite/:id').get( commandeCotrollers.listesCommandeTraite);
commandeRoutes.route('/listeCommandeAttente').get(commandeCotrollers.listeCommandeAttente);
commandeRoutes.route('/listeCommandeTraite').get(auth, commandeCotrollers.listeCommandeTraite);
commandeRoutes.route('/listeCommandeFournisseur').get(auth, commandeCotrollers.listeCommandeFournisseur);
commandeRoutes.route('/listeCommandeFourniTraite').get(auth, commandeCotrollers.listeCommandeFourniTraite);
commandeRoutes.route('/listeCommandeFourni').get(auth, commandeCotrollers.listeCommandeFourni);
commandeRoutes.route('/AllCommandeAttente').get(auth, commandeCotrollers.AllCommandeAttente);
commandeRoutes.route('/AllCommandeTraite').get(auth, commandeCotrollers.AllCommandeTraite);

commandeRoutes.route('/AllCommandeTraiteAD').get(auth, commandeCotrollers.AllCommandeTraiteAD);

commandeRoutes.route('/AllCommandeFournisseur').get(auth, commandeCotrollers.AllCommandeFournisseur);
commandeRoutes.route('/listeCommande').get( commandeCotrollers.listeCommande);
commandeRoutes.route('/listeComman/:id').get( commandeCotrollers.listeComman);
commandeRoutes.route('/getCommandeById/:id').get(auth, commandeCotrollers.getCommandeById);
commandeRoutes.route('/deleteCommande').post(auth, commandeCotrollers.deleteCommande);
commandeRoutes.route('/cancelCommande/:id').get(commandeCotrollers.cancelCommande);
commandeRoutes.route('/revoqueCommande/:id/:id_user').get(auth,commandeCotrollers.revoqueCommandes);
commandeRoutes.route('/relationCommandes').post(auth,commandeCotrollers.relationCommandes);
//commandeRoutes.route('/relationCommandes/:id/:id_commande/:id_stock').get(auth,commandeCotrollers.relationCommandes);
commandeRoutes.route('/relationCommande/:id/:id_commande').get(auth,commandeCotrollers.relationCommande);
commandeRoutes.route('/livraisonCommandeFournisseurs').post(auth,commandeCotrollers.livraisonCommandeFournisseurs);
//commandeRoutes.route('/livraisonCommandeFournisseur/:id/:id_user').get(auth,commandeCotrollers.livraisonCommandeFournisseur);
commandeRoutes.route('/livraisonCommandeFournisseur').post(auth,commandeCotrollers.livraisonCommandeFournisseur);
commandeRoutes.route('/paypal/:id').get(commandeCotrollers.paypal);
commandeRoutes.route('/livraisonCommande/:id').get(auth, commandeCotrollers.livraisonCommande);
commandeRoutes.route('/livraisonCommandes').post(auth, commandeCotrollers.livraisonCommandes);
commandeRoutes.route('/ViewRelation/:id/').get(auth, commandeCotrollers.ViewRelation);
commandeRoutes.route('/getCommandeByIds/:id').get(auth, commandeCotrollers.getCommandeByIds);
module.exports = commandeRoutes;
