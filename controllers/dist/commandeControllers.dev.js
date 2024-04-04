"use strict";

var Commande = require('../models/Commande');

var User = require('../models/Distributeur');

var Mise = require('../models/Mise');

module.exports.addCommande = function _callee(req, res) {
  var commande;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          commande = Commande.insertMany(req.body);

          if (!commande) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(200).json(commande));

        case 6:
          return _context.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 7:
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

module.exports.listeCommande = function _callee2(req, res) {
  var user, commandes;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          user = req.payload._id;
          console.log("moi", user);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Commande.find({
            "status": 0,
            "delete": 0,
            "client_id": user
          }).sort({
            "createdAt": -1
          }).populate('produit_id').populate('client_id').populate('zone_id'));

        case 5:
          commandes = _context2.sent;
          console.log(commandes);

          if (!commandes) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context2.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](2);
          return _context2.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.listeCommandeTraite = function _callee3(req, res) {
  var user, commandes;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          user = req.payload._id;
          console.log("moi", user);
          _context3.prev = 2;
          _context3.next = 5;
          return regeneratorRuntime.awrap(Commande.find({
            "status_relation": 2,
            "delete": 0,
            "valider": 2,
            "client_id": user
          }).sort({
            "createdAt": -1
          }).populate('produit_id').populate('client_id').populate('zone_id'));

        case 5:
          commandes = _context3.sent;
          console.log(commandes);

          if (!commandes) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context3.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](2);
          return _context3.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.listeCommandeAttente = function _callee4(req, res) {
  var user, commandes;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          user = req.payload._id;
          console.log("moi", user);
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Commande.find({
            "status": 1,
            "status_relation": 2,
            "delete": 0,
            "valider": 0,
            "client_id": user
          }).sort({
            "createdAt": -1
          }).populate('produit_id').populate('client_id').populate('zone_id'));

        case 5:
          commandes = _context4.sent;
          console.log(commandes);

          if (!commandes) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context4.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context4.next = 17;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.listeCommandeFourni = function _callee5(req, res) {
  var id, commandes;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.payload._id;
          console.log("moi", id);
          _context5.prev = 2;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Mise.find({
            "client_id": id,
            "status": 6,
            "livrer": 0,
            "delete": 0
          }).sort({
            "createdAt": -1
          }).populate({
            path: "commande_id",
            populate: {
              path: "produit_id"
            }
          }).populate({
            path: "commande_id",
            populate: {
              path: "zone_id"
            }
          }).populate({
            path: "commande_id",
            populate: {
              path: "product_id"
            }
          }));

        case 5:
          commandes = _context5.sent;
          console.log("commande", commandes);

          if (!commandes) {
            _context5.next = 11;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context5.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context5.next = 17;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](2);
          return _context5.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.listeCommandeFourniTraite = function _callee6(req, res) {
  var id, commandes;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.payload._id;
          console.log("moi", id);
          _context6.prev = 2;
          _context6.next = 5;
          return regeneratorRuntime.awrap(Mise.find({
            "client_id": id,
            "livrer": 4,
            "delete": 0
          }).sort({
            "createdAt": -1
          }).populate({
            path: "commande_id",
            populate: {
              path: "produit_id"
            }
          }).populate({
            path: "commande_id",
            populate: {
              path: "zone_id"
            }
          }).populate({
            path: "commande_id",
            populate: {
              path: "product_id"
            }
          }));

        case 5:
          commandes = _context6.sent;
          console.log("commande", commandes);

          if (!commandes) {
            _context6.next = 11;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context6.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context6.next = 17;
          break;

        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](2);
          return _context6.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.listeCommandeFournisseur = function _callee7(req, res) {
  var id, commandes;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.payload._id;
          console.log("moi", id);
          _context7.prev = 2;
          _context7.next = 5;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }).populate({
            path: "valide.commande_id",
            populate: {
              path: "produit_id"
            }
          }).populate({
            path: "valide.commande_id",
            populate: {
              path: "zone_id"
            }
          }));

        case 5:
          commandes = _context7.sent;
          console.log("commande", commandes);

          if (!commandes) {
            _context7.next = 11;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context7.next = 17;
          break;

        case 14:
          _context7.prev = 14;
          _context7.t0 = _context7["catch"](2);
          return _context7.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.AllCommandeAttente = function _callee8(req, res) {
  var user, commandes;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          user = req.payload._id;
          console.log("moi", user);
          _context8.prev = 2;
          _context8.next = 5;
          return regeneratorRuntime.awrap(Commande.find({
            "status_relation": 2,
            "delete": 0
          }).sort({
            "createdAt": -1
          }).populate('client_id').populate('zone_id').populate('produit_id').populate('product_id'));

        case 5:
          commandes = _context8.sent;
          console.log(commandes);

          if (!commandes) {
            _context8.next = 11;
            break;
          }

          return _context8.abrupt("return", res.status(200).json(commandes));

        case 11:
          return _context8.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context8.next = 17;
          break;

        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](2);
          return _context8.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[2, 14]]);
};

module.exports.cancelCommande = function _callee9(req, res) {
  var commande;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          id = req.params.id;
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }));

        case 4:
          commande = _context9.sent;
          commande[0]["delete"] = 1;
          commande[0].save();

          if (!commande[0]) {
            _context9.next = 11;
            break;
          }

          return _context9.abrupt("return", res.status(200).json(commande[0]));

        case 11:
          return _context9.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context9.next = 17;
          break;

        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](1);
          return _context9.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.getCommandeById = function _callee10(req, res) {
  var id, commande;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          id = req.params.id;
          _context10.prev = 1;
          _context10.next = 4;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id,
            "delete": 0
          }).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id'));

        case 4:
          commande = _context10.sent;
          console.log(commande);

          if (!commande) {
            _context10.next = 10;
            break;
          }

          return _context10.abrupt("return", res.status(200).json(commande));

        case 10:
          return _context10.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context10.next = 16;
          break;

        case 13:
          _context10.prev = 13;
          _context10.t0 = _context10["catch"](1);
          return _context10.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 16:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

module.exports.relationCommandes = function _callee11(req, res) {
  var id, id_commande, object, user, name, tel, commande, telephone, nom, quantite, type, marque, commune, localite, _options, _orangeSms, _options2, _orangeSms2;

  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id;
          id_commande = req.params.id_commande;
          console.log("id", id);
          console.log("id_commande", id_commande);
          _context11.prev = 4;
          object = {
            client_id: id,
            commande_id: id_commande,
            status: 6
          };
          Mise.insertMany(object); //let user = await User.find({"_id": id});

          _context11.next = 9;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 9:
          user = _context11.sent;
          name = user[0].name;
          tel = user[0].tel;
          _context11.next = 14;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": req.params.id_commande
          }).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id'));

        case 14:
          commande = _context11.sent;
          telephone = commande[0].telephone;
          nom = commande[0].nom;
          quantite = commande[0].quantite;
          type = commande[0].produit_id.type;
          marque = commande[0].produit_id.marque; //  let types=commande[0].product_id?.type;
          //  let marques=commande[0].product_id?.marque;
          // let types = person.hasOwnProperty(commande[0].product_id.type);
          // let marques = person.hasOwnProperty(commande[0].product_id.marque);

          commune = commande[0].zone_id.commune;
          localite = commande[0].zone_id.localite; // let mar = marques ? marques : marque;
          // let ty = types ? types : type;

          commande[0].status = 5;
          commande[0].user_id = id;
          commande[0].save();

          if (!commande[0]) {
            _context11.next = 39;
            break;
          }

          if (!(commande[0].client_id == undefined)) {
            _context11.next = 33;
            break;
          }

          _options = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: tel,
            // Number; The number to which you are sending a message without area code
            sender_phone: tel,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour " + name + " " + " vous avez reçu une commande de  " + " " + quantite + " Metre cube " + mar + " " + ty + " qui doit etre livrer a " + commune + " " + localite + " contact client " + telephone // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          _orangeSms = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms(_options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          return _context11.abrupt("return", res.status(200).json(commande[0]));

        case 33:
          _options2 = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: tel,
            // Number; The number to which you are sending a message without area code
            sender_phone: tel,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour " + name + " " + " vous avez reçu une commande de  " + " " + quantite + " Metre cube " + marque + " " + type + " qui doit etre livrer a " + commune + " " + localite + " contact client " + telephone // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          _orangeSms2 = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms2(_options2).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          return _context11.abrupt("return", res.status(200).json(commande[0]));

        case 37:
          _context11.next = 40;
          break;

        case 39:
          return _context11.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 40:
          _context11.next = 45;
          break;

        case 42:
          _context11.prev = 42;
          _context11.t0 = _context11["catch"](4);
          return _context11.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 45:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[4, 42]]);
};

module.exports.revoqueCommandes = function _callee12(req, res) {
  var id_commande, id_user, relation, commande;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          id_commande = req.params.id;
          id_user = req.params.id_user;
          console.log("id", id_commande);
          console.log("id_user", id_user);
          _context12.prev = 4;
          _context12.next = 7;
          return regeneratorRuntime.awrap(Mise.find({
            "client_id": id_user,
            "delete": 0,
            "status": 6
          }));

        case 7:
          relation = _context12.sent;
          _context12.next = 10;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id_commande
          }));

        case 10:
          commande = _context12.sent;
          commande[0].status = 1;
          commande[0].save();
          relation[0]["delete"] = 1;
          relation[0].save();

          if (!relation[0]) {
            _context12.next = 19;
            break;
          }

          return _context12.abrupt("return", res.status(200).json(relation[0]));

        case 19:
          return _context12.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context12.next = 25;
          break;

        case 22:
          _context12.prev = 22;
          _context12.t0 = _context12["catch"](4);
          return _context12.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[4, 22]]);
};

module.exports.relationCommande = function _callee13(req, res) {
  var id, id_commande, user, commande;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          id_commande = req.params.id_commande;
          console.log("id", id);
          console.log("id_commande", id_commande);
          _context13.prev = 4;
          _context13.next = 7;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 7:
          user = _context13.sent;
          _context13.next = 10;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": req.params.id_commande
          }));

        case 10:
          commande = _context13.sent;
          commande[0].status = 5;
          commande[0].save();
          user[0].valide.commande_id.push(id_commande);
          user[0].save();

          if (!user[0]) {
            _context13.next = 19;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(user[0]));

        case 19:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context13.next = 25;
          break;

        case 22:
          _context13.prev = 22;
          _context13.t0 = _context13["catch"](4);
          return _context13.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[4, 22]]);
};

module.exports.attenteCommande = function _callee14(req, res) {
  var commande;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _context14.prev = 1;
          _context14.next = 4;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }));

        case 4:
          commande = _context14.sent;
          commande[0].status = 3;
          commande[0].save();

          if (!commande[0]) {
            _context14.next = 11;
            break;
          }

          return _context14.abrupt("return", res.status(200).json(commande[0]));

        case 11:
          return _context14.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context14.next = 17;
          break;

        case 14:
          _context14.prev = 14;
          _context14.t0 = _context14["catch"](1);
          return _context14.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.livrerCommande = function _callee15(req, res) {
  var user, commande, telephone, nom, prenom, type, marque;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          user = req.payload._id;
          console.log("mon id", id);
          _context15.prev = 3;
          _context15.next = 6;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }).populate('produit_id').populate('client_id').populate('zone_id'));

        case 6:
          commande = _context15.sent;
          telephone = commande[0].telephone;
          nom = commande[0].nom;
          prenom = commande[0].prenom;
          type = commande[0].produit_id.type;
          marque = commande[0].produit_id.marque;
          commande[0].status = 1;
          commande[0].status_relation = 2; //commandes[0].save();

          options = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: telephone,
            // Number; The number to which you are sending a message without area code
            sender_phone: telephone,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Mr/Mme " + prenom + " " + nom + " votre commande  " + marque + " " + type + " a été prise en charge et la livraison se fera très rapidement.\n" + "Bankitruck, votre E-comerce d’agregat.\n" + "www.bankitruck.com.\n" + "infoline : 627173535" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          orangeSms = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          orangeSms(options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });
          commande[0].save();
          options = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: 620284907,
            // Number; The number to which you are sending a message without area code
            sender_phone: 620284907,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour Bankitruck " + prenom + " " + nom + " votre commande  " + marque + " " + type + " a été prise en charge et la livraison se fera très rapidement.\n" + "Bankitruck, votre E-comerce d’agregat.\n" + "www.bankitruck.com.\n" + "infoline : 627173535" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          orangeSms = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          orangeSms(options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          if (!commande[0]) {
            _context15.next = 25;
            break;
          }

          return _context15.abrupt("return", res.status(200).json(commande[0]));

        case 25:
          return _context15.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 26:
          _context15.next = 31;
          break;

        case 28:
          _context15.prev = 28;
          _context15.t0 = _context15["catch"](3);
          return _context15.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 31:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[3, 28]]);
};

module.exports.deleteCommande = function _callee16(req, res) {
  var commande;
  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          id = req.params.id;
          _context16.prev = 1;
          _context16.next = 4;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }));

        case 4:
          commande = _context16.sent;
          commande[0]["delete"] = 1;
          commande[0].save();

          if (!commande[0]) {
            _context16.next = 11;
            break;
          }

          return _context16.abrupt("return", res.status(200).json(commande[0]));

        case 11:
          return _context16.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context16.next = 17;
          break;

        case 14:
          _context16.prev = 14;
          _context16.t0 = _context16["catch"](1);
          return _context16.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.livraisonCommandes = function _callee17(req, res) {
  var id, id_user, commande, commandes, telephone, nom, name, tel, quantite, prenom, type, marque, types, marques, _options3, _orangeSms3, _options4, _orangeSms4;

  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          id_user = req.params.id_user;
          console.log("id", id);
          console.log("user", id_user);
          _context17.prev = 4;
          _context17.next = 7;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id'));

        case 7:
          commande = _context17.sent;
          _context17.next = 10;
          return regeneratorRuntime.awrap(Mise.find({
            "client_id": id_user
          }));

        case 10:
          commandes = _context17.sent;
          commande[0].status = 7;
          commande[0].valider = 2;
          telephone = commande[0].telephone;
          nom = commande[0].nom;
          name = commande[0].client_id.name;
          tel = commande[0].client_id.tel;
          quantite = commande[0].quantite;
          prenom = commande[0].prenom;
          type = commande[0].produit_id.type;
          marque = commande[0].produit_id.marque;
          types = commande[0].product_id.type;
          marques = commande[0].product_id.marque; // commande[0].date = Date.now;

          commande[0].save();
          commandes[0].valider = 1; // commandes[0].date = Date.now;

          commandes[0].save();
          _options3 = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: telephone,
            // Number; The number to which you are sending a message without area code
            sender_phone: telephone,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour " + nom + " " + prenom + " bankitruck vous  remerci pour la confiance   "
          };
          _orangeSms3 = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms3(_options3).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          if (!commande[0]) {
            _context17.next = 36;
            break;
          }

          _options4 = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: tel,
            // Number; The number to which you are sending a message without area code
            sender_phone: tel,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour " + name + " " + " votre commande  " + " " + quantite + " " + marque + " " + type + "dont le numero du client est " + telephone + " a été livrer" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          _orangeSms4 = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms4(_options4).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          return _context17.abrupt("return", res.status(200).json(commande[0]));

        case 36:
          return _context17.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 37:
          _context17.next = 42;
          break;

        case 39:
          _context17.prev = 39;
          _context17.t0 = _context17["catch"](4);
          return _context17.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 42:
        case "end":
          return _context17.stop();
      }
    }
  }, null, null, [[4, 39]]);
};

module.exports.livraisonCommandeFournisseur = function _callee18(req, res) {
  var id_user, id, telephone_chuaffeur, options, today, da, commande, commandes, telephone, nom, name, tel, quantite, prenom, type, marque, types, marques, _options5, _orangeSms5;

  return regeneratorRuntime.async(function _callee18$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          //let id = req.params.id;
          id_user = req.body.id_user;
          id = req.body.id;
          telephone_chuaffeur = req.body.telephone; // let id_user = req.body.id_user;

          options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          };
          today = new Date();
          da = today.toLocaleDateString("fr-FR", options); //let date=Date.now;

          _context18.prev = 6;
          _context18.next = 9;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id_user
          }).populate('produit_id').populate('client_id').populate('zone_id').populate('product_id'));

        case 9:
          commande = _context18.sent;
          _context18.next = 12;
          return regeneratorRuntime.awrap(Mise.find({
            "_id": id
          }));

        case 12:
          commandes = _context18.sent;
          telephone = commande[0].telephone;
          nom = commande[0].nom;
          name = commande[0].client_id.name;
          tel = commande[0].client_id.tel;
          quantite = commande[0].quantite;
          prenom = commande[0].prenom;
          type = commande[0].produit_id.type;
          marque = commande[0].produit_id.marque;
          types = commande[0].product_id.type;
          marques = commande[0].product_id.marque;
          commandes[0].status = 6;
          commandes[0].livrer = 4;
          commandes[0].date = da; //commande[0].date = Date.now;

          commandes[0].save();
          commande[0].livrer = 4;
          commande[0].date = da;
          commande[0].status = 8; //commande[0].date = Date.now;

          commandes[0].date = da;
          commande[0].save();

          if (!commandes[0]) {
            _context18.next = 39;
            break;
          }

          _options5 = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: telephone,
            // Number; The number to which you are sending a message without area code
            sender_phone: telephone,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour " + nom + " " + prenom + " " + " votre commande  " + " " + quantite + " " + marque + " " + type + "est en cours de livraison le numero du chauffeur est " + telephone_chuaffeur // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          _orangeSms5 = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms5(_options5).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          return _context18.abrupt("return", res.status(200).json(commandes[0]));

        case 39:
          return _context18.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 40:
          _context18.next = 45;
          break;

        case 42:
          _context18.prev = 42;
          _context18.t0 = _context18["catch"](6);
          return _context18.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 45:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[6, 42]]);
};

module.exports.livraisonCommande = function _callee19(req, res) {
  var commande;
  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          id = req.params.id;
          _context19.prev = 1;
          _context19.next = 4;
          return regeneratorRuntime.awrap(Commande.find({
            "_id": id
          }));

        case 4:
          commande = _context19.sent;
          commande[0].status = 9;
          commande[0].save();

          if (!commande[0]) {
            _context19.next = 11;
            break;
          }

          return _context19.abrupt("return", res.status(200).json(commande[0]));

        case 11:
          return _context19.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context19.next = 17;
          break;

        case 14:
          _context19.prev = 14;
          _context19.t0 = _context19["catch"](1);
          return _context19.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[1, 14]]);
};