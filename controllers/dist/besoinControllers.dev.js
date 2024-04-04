"use strict";

var Besoin = require('../models/Besoin');

var mongoose = require('mongoose');

var Flotte = require('../models/Flotte');

var Notification = require('../models/Notification');

var Relation = require('../models/Relation');

var User = require('../models/User');

var Besoin = mongoose.model('Besoin');
"use strict";

var nodemailer = require("nodemailer");

module.exports.addNotification = function _callee(req, res) {
  var notification;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          notification = Notification.insertMany(req.body);

          if (!notification) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(200).json(notification));

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

module.exports.getNotification = function _callee2(req, res) {
  var notification;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Notification.find({}));

        case 3:
          notification = _context2.sent;

          if (!notification) {
            _context2.next = 8;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(notification[0]));

        case 8:
          return _context2.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 9:
          _context2.next = 14;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 14:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 11]]);
}; // module.exports.addBesoin = function (req, res) {
//     var besoin = new Besoin();
//     besoin.engin = req.body.engin;
//     besoin.nombre = req.body.nombre;
//     besoin.article = req.body.article;
//     besoin.qtTransport = req.body.qtTransport;
//     besoin.distance = req.body.distance;
//     besoin.typeContra = req.body.typeContra;
//     besoin.dureeContrat = req.body.dureeContrat;
//     besoin.categorie = req.body.categorie;
//     besoin.vehicule = req.body.vehicule;
//     besoin.nbPlace = req.body.nbPlace;
//     besoin.depart = req.body.depart;
//     besoin.ariver = req.body.ariver;
//     besoin.activite = req.body.activite;
//     besoin.qtVehicule = req.body.qtVehicule;
//     besoin.horaire = req.body.horaire;
//     besoin.etat = req.body.etat;
//     besoin.prix = req.body.prix;
//     besoin.zoneOperation = req.body.zoneOperation;
//     besoin.detail = req.body.detail;
//     besoin.user_id = req.body.user_id;
//     besoin.save();
//     return res.status(200).json(besoin);
//   };


module.exports.addBesoin = function _callee3(req, res) {
  var besoin, message, _options, _orangeSms;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          options = {
            authorization_header: "Basic MFlHY2E3QkdUWGdZV0NTVk00aWtGQnFKbUZHUFVlRnk6R0hVSnhHMDlnVTE3MklVZA==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            merchant_key: "a7dc1408",
            // String; Telephony code of your country Ex: +237
            currency: "GNF",
            // Number; The number to which you are sending a message without area code
            order_id: 100,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            montant: 10000,
            return_url: "http://myvirtualshop.webnode.es",
            cancel_url: "http://myvirtualshop.webnode.es/txncncld/",
            notif_url: "http://www.merchant-example2.org/notif",
            lang: "fr",
            reference: "ref_Merchant" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          orangeSms = require('./orangeOM.js'); // The path inside require() depends on how your app folder structure is;

          orangeSms(options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });
          besoin = Besoin.insertMany(req.body);
          message = req.payload.nameEntreprise == '' ? req.payload.name : req.payload.nameEntreprise;

          if (!besoin) {
            _context3.next = 13;
            break;
          }

          _options = {
            authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            area_code: "+224",
            // String; Telephony code of your country Ex: +237
            sender_number: 620284907,
            // Number; The number to which you are sending a message without area code
            sender_phone: 620284907,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            sms_body: "Bonjour" + message + " le besoin " + req.body.engin + " a été enregistré avec succés.Le traitement se fera dans un bref delai.\nMerci pour la confiance.\nVotre univers de Comion & E-commerce d'Agrégats.\nwww.bankitruck.com\n+224627153434" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          _orangeSms = require('./orangeSms.js'); // The path inside require() depends on how your app folder structure is;

          _orangeSms(_options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          });

          return _context3.abrupt("return", res.status(200).json(besoin));

        case 13:
          return _context3.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 14:
          _context3.next = 19;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 19:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

module.exports.OrangeMoney = function _callee4(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          //  console.log('TEL', req.payload.tel);
          //  console.log('NAME', req.payload.name);
          id = req.params.id;
          console.log(id);
          _context4.prev = 2;
          options = {
            authorization_header: "Basic a2R0NkdZaGhBM05kRVpRaFBJOWIzbzNaQjdtUFNJNHg6WDc3dkc0RWJFV3R4ODFiNg==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            merchant_key: "8ce1334b",
            // Sring; Telephony code of your country Ex: +237
            currency: "GNF",
            // Number; The number to which you are sending a message without area code
            order_id: id,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            amount: 1000,
            return_url: "http://myvirtualshop.webnode.es",
            cancel_url: "http://myvirtualshop.webnode.es/txncncld/",
            notif_url: "https://test.timboinfo.com/public/api/modification/",
            lang: "fr",
            reference: "Bankitruck" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          orangeSms = require('./orangeOmApi.js'); // The path inside require() depends on how your app folder structure is;

          orangeSms(options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
            return res.status(201).json(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          }); //     if (responseOrangeSms){
          //     return res.status(201).json(responseOrangeSms);
          //     // orangeSms(options)
          //     // .then(responseOrangeSms =>responseOrangeSms.json().then(data =>({status: responseOrangeSms.status, body: data})))
          //     // .catch((error) => {
          //     //     console.log(error);
          //     // });
          // }else{
          //     return res.status(404).send(new Error('Erreur 404...')) 
          // }

          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](2);
          return _context4.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

module.exports.getBesoinAndClientById = function _callee5(req, res) {
  var id, besoin, _besoin;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context5.next = 13;
            break;
          }

          _context5.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }).populate('user_id'));

        case 5:
          besoin = _context5.sent;

          if (!besoin) {
            _context5.next = 10;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(besoin[0]));

        case 10:
          return _context5.abrupt("return", res.status(404).send(new Error('404 not found')));

        case 11:
          _context5.next = 21;
          break;

        case 13:
          _context5.next = 15;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }).populate('user_id'));

        case 15:
          _besoin = _context5.sent;

          if (!_besoin) {
            _context5.next = 20;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(_besoin[0]));

        case 20:
          return _context5.abrupt("return", res.status(404).send(new Error('404 not found')));

        case 21:
          _context5.next = 26;
          break;

        case 23:
          _context5.prev = 23;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).send(new Error('Erreur server 500...')));

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.getBesoinsEncoursForAdmin = function _callee6(req, res) {
  var besoins;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Besoin.find({
            "delete": 0,
            "status": 0
          }).populate('user_id'));

        case 3:
          besoins = _context6.sent;

          if (!besoins) {
            _context6.next = 8;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(besoins));

        case 8:
          return _context6.abrupt("return", res.status(404).send(new Error('404 not found')));

        case 9:
          _context6.next = 14;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send(new Error('Erreur server 500...')));

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.getBesoinLourd = function _callee7(req, res) {
  var besoins, _besoins;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context7.next = 13;
            break;
          }

          console.log('OUPS ADMINISTRATOR');
          _context7.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'lourd',
            "delete": 0
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 5:
          besoins = _context7.sent;

          if (!besoins) {
            _context7.next = 10;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(besoins));

        case 10:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context7.next = 22;
          break;

        case 13:
          console.log('OUPS USER');
          _context7.next = 16;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'lourd',
            "delete": 0,
            "user_id": req.payload._id
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 16:
          _besoins = _context7.sent;

          if (!_besoins) {
            _context7.next = 21;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(_besoins));

        case 21:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 22:
          _context7.next = 27;
          break;

        case 24:
          _context7.prev = 24;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 27:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 24]]);
};

module.exports.mail = function _callee8(req, res) {
  var nodemailer, transporter, mailOptions;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          //  let testAccount = await nodemailer.createTestAccount();
          nodemailer = require('nodemailer'); // create reusable transporter object using the default SMTP transport

          transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            auth: {
              user: 'barrymamadoualiou07@gmail.com',
              pass: 'xvnppsudnflxcuyc'
            }
          }); // send mail with defined transport object

          mailOptions = {
            from: 'sender@email.com',
            // sender address
            to: 'bellabarry629@gmail.com',
            // list of receivers
            subject: 'Contrat',
            // Subject line// Subject line
            text: "Hello world?"
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) console.log(err);else console.log(info);
          });
          _context8.next = 10;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

module.exports.PayementOM = function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          //console.log('NAME', req.payload._id);
          options = {
            authorization_header: "Basic MFlHY2E3QkdUWGdZV0NTVk00aWtGQnFKbUZHUFVlRnk6R0hVSnhHMDlnVTE3MklVZA==",
            // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
            merchant_key: "a7dc1408",
            // String; Telephony code of your country Ex: +237
            currency: "GNF",
            // Number; The number to which you are sending a message without area code
            order_id: 1,
            // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
            montant: 10000,
            return_url: "http://myvirtualshop.webnode.es",
            cancel_url: "http://myvirtualshop.webnode.es/txncncld/",
            notif_url: "http://www.merchant-example2.org/notif",
            lang: "fr",
            reference: "ref_Merchant" // String; Your message text to send, not much than 160 characters otherwise Orange will cut it

          };
          orangeSms = require('./orangeOM.js'); // The path inside require() depends on how your app folder structure is;

          orangeSms(options).then(function (responseOrangeSms) {
            console.log(responseOrangeSms);
          })["catch"](function (error) {
            console.log(error);
          }); //    let produit = await Produit.find({"delete": 0});
          //     if (produit) {
          //        // options = {
          //        //     authorization_header: "Basic S2h2UVJ4OU9DSWtmeG1hdUpOQzg1RUhYMmRSRm0zc3Q6THJQNTNBaFBpSzNmWDFLMQ==", // String; Must be in this form Basic xxxxxxxxxxxxxxxx take it on your Orange Application
          //        //     area_code: "+224", // String; Telephony code of your country Ex: +237
          //        //     sender_number: 620284907, // Number; The number to which you are sending a message without area code
          //        //     sender_phone: 620284907, // Number; Your number without the area code, this number must be the same that you entered for your registration on Orange website
          //        //     sms_body: "Bonjour "    // String; Your message text to send, not much than 160 characters otherwise Orange will cut it
          //        // };
          //        // orangeSms = require('./orangeSms.js') // The path inside require() depends on how your app folder structure is;
          //        // orangeSms(options)
          //        //     .then((responseOrangeSms) => {
          //        //         console.log(responseOrangeSms);
          //        //     }).catch((error) => {
          //        //         console.log(error);
          //        //     }); 
          //  return res.status(200).json(produit);
          //         } else {
          //        return res.status(404).send(new Error('Erreur 404...'))

          _context9.next = 9;
          break;

        case 6:
          _context9.prev = 6;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 9:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports.besoinsAll = function _callee10(req, res) {
  var besoins, _besoins2;

  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context10.next = 12;
            break;
          }

          _context10.next = 4;
          return regeneratorRuntime.awrap(Besoin.find({
            "delete": 0
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 4:
          besoins = _context10.sent;

          if (!besoins) {
            _context10.next = 9;
            break;
          }

          return _context10.abrupt("return", res.status(200).json(besoins));

        case 9:
          return _context10.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context10.next = 20;
          break;

        case 12:
          _context10.next = 14;
          return regeneratorRuntime.awrap(Besoin.find({
            "delete": 0,
            "user_id": req.payload._id
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 14:
          _besoins2 = _context10.sent;

          if (!_besoins2) {
            _context10.next = 19;
            break;
          }

          return _context10.abrupt("return", res.status(200).json(_besoins2));

        case 19:
          return _context10.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context10.next = 25;
          break;

        case 22:
          _context10.prev = 22;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.testRequete = function _callee11(req, res) {
  var besoins;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return regeneratorRuntime.awrap(Besoin.aggregate([{
            $unwind: "$user_id"
          }]));

        case 3:
          besoins = _context11.sent;

          if (!besoins) {
            _context11.next = 8;
            break;
          }

          return _context11.abrupt("return", res.status(200).json(besoins));

        case 8:
          return _context11.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 9:
          _context11.next = 14;
          break;

        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](0);
          return _context11.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 14:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.getBesoinLeger = function _callee12(req, res) {
  var besoins, _besoins3;

  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context12.next = 13;
            break;
          }

          _context12.next = 4;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'leger',
            "delete": 0
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 4:
          besoins = _context12.sent;
          ;

          if (!besoins) {
            _context12.next = 10;
            break;
          }

          return _context12.abrupt("return", res.status(200).json(besoins));

        case 10:
          return _context12.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context12.next = 22;
          break;

        case 13:
          _context12.next = 15;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'leger',
            "delete": 0,
            "user_id": req.payload._id
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 15:
          _besoins3 = _context12.sent;
          ;

          if (!_besoins3) {
            _context12.next = 21;
            break;
          }

          return _context12.abrupt("return", res.status(200).json(_besoins3));

        case 21:
          return _context12.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 22:
          _context12.next = 27;
          break;

        case 24:
          _context12.prev = 24;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 27:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[0, 24]]);
};

module.exports.getBesoinMachine = function _callee13(req, res) {
  var besoins, _besoins4;

  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context13.next = 12;
            break;
          }

          _context13.next = 4;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'machine',
            "delete": 0
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 4:
          besoins = _context13.sent;

          if (!besoins) {
            _context13.next = 9;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(besoins));

        case 9:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context13.next = 20;
          break;

        case 12:
          _context13.next = 14;
          return regeneratorRuntime.awrap(Besoin.find({
            "categorie": 'machine',
            "delete": 0,
            "user_id": req.payload._id
          }).populate('user_id').sort({
            createdAt: -1
          }));

        case 14:
          _besoins4 = _context13.sent;

          if (!_besoins4) {
            _context13.next = 19;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(_besoins4));

        case 19:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context13.next = 25;
          break;

        case 22:
          _context13.prev = 22;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.getBesoinLourdById = function _callee14(req, res) {
  var besoin, _besoin2;

  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _id = req.params._id;
          _context14.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context14.next = 13;
            break;
          }

          _context14.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": _id,
            "delete": 0
          }));

        case 5:
          besoin = _context14.sent;

          if (!besoin) {
            _context14.next = 10;
            break;
          }

          return _context14.abrupt("return", res.status(200).json(besoin[0]));

        case 10:
          return _context14.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context14.next = 21;
          break;

        case 13:
          _context14.next = 15;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": _id,
            "delete": 0,
            "user_id": req.payload._id
          }));

        case 15:
          _besoin2 = _context14.sent;

          if (!_besoin2) {
            _context14.next = 20;
            break;
          }

          return _context14.abrupt("return", res.status(200).json(_besoin2[0]));

        case 20:
          return _context14.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context14.next = 26;
          break;

        case 23:
          _context14.prev = 23;
          _context14.t0 = _context14["catch"](1);
          return _context14.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.besoinClientStatus = function _callee15(req, res) {
  var besoins, _besoins5;

  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context15.next = 12;
            break;
          }

          _context15.next = 4;
          return regeneratorRuntime.awrap(Besoin.find({
            "status": 0,
            "delete": 0
          }).sort({
            createdAt: -1
          }));

        case 4:
          besoins = _context15.sent;

          if (!besoins) {
            _context15.next = 9;
            break;
          }

          return _context15.abrupt("return", res.status(200).json(besoins));

        case 9:
          return _context15.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context15.next = 20;
          break;

        case 12:
          _context15.next = 14;
          return regeneratorRuntime.awrap(Besoin.find({
            "status": 0,
            "delete": 0,
            "user_id": req.payload._id
          }).sort({
            createdAt: -1
          }));

        case 14:
          _besoins5 = _context15.sent;

          if (!_besoins5) {
            _context15.next = 19;
            break;
          }

          return _context15.abrupt("return", res.status(200).json(_besoins5));

        case 19:
          return _context15.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context15.next = 25;
          break;

        case 22:
          _context15.prev = 22;
          _context15.t0 = _context15["catch"](0);
          return _context15.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.updateBesoin = function _callee16(req, res) {
  var id, besoin, _besoin3;

  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          console.log('REQ DEPART', req.body.depart);
          id = req.params.id;
          _context16.prev = 2;

          if (!(req.payload.role == 'admin')) {
            _context16.next = 31;
            break;
          }

          _context16.next = 6;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }));

        case 6:
          besoin = _context16.sent;

          if (besoin) {
            _context16.next = 11;
            break;
          }

          return _context16.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 11:
          besoin[0].engin = req.body.engin;
          besoin[0].nombre = req.body.nombre;
          besoin[0].prix = req.body.prix;
          besoin[0].distance = req.body.distance;
          besoin[0].article = req.body.article;
          besoin[0].qtTransport = req.body.qtTransport;
          besoin[0].rotation = req.body.rotation;
          besoin[0].typeContrat = req.body.typeContrat;
          besoin[0].dureeContrat = req.body.dureeContrat;
          besoin[0].ariver = req.body.ariver;
          besoin[0].depart = req.body.depart;
          besoin[0].horaire = req.body.horaire;
          besoin[0].etat = req.body.etat;
          besoin[0].activite = req.body.activite;
          besoin[0].zoneOperation = req.body.zoneOperation;
          besoin[0].detail = req.body.detail;
          besoin[0].save();
          return _context16.abrupt("return", res.status(200).json(besoin[0]));

        case 29:
          _context16.next = 56;
          break;

        case 31:
          _context16.next = 33;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0,
            "user_id": req.payload._id
          }));

        case 33:
          _besoin3 = _context16.sent;

          if (_besoin3) {
            _context16.next = 38;
            break;
          }

          return _context16.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 38:
          _besoin3[0].engin = req.body.engin;
          _besoin3[0].nombre = req.body.nombre;
          _besoin3[0].prix = req.body.prix;
          _besoin3[0].distance = req.body.distance;
          _besoin3[0].article = req.body.article;
          _besoin3[0].qtTransport = req.body.qtTransport;
          _besoin3[0].rotation = req.body.rotation;
          _besoin3[0].typeContrat = req.body.typeContrat;
          _besoin3[0].dureeContrat = req.body.dureeContrat;
          _besoin3[0].ariver = req.body.ariver;
          _besoin3[0].depart = req.body.depart;
          _besoin3[0].horaire = req.body.horaire;
          _besoin3[0].etat = req.body.etat;
          _besoin3[0].activite = req.body.activite;
          _besoin3[0].zoneOperation = req.body.zoneOperation;
          _besoin3[0].detail = req.body.detail;

          _besoin3[0].save();

          return _context16.abrupt("return", res.status(200).json(_besoin3[0]));

        case 56:
          _context16.next = 61;
          break;

        case 58:
          _context16.prev = 58;
          _context16.t0 = _context16["catch"](2);
          return _context16.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 61:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[2, 58]]);
};

module.exports.updateBesoinMachine = function _callee17(req, res) {
  var id, besoin, _besoin4;

  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          id = req.params.id;
          _context17.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context17.next = 21;
            break;
          }

          _context17.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }));

        case 5:
          besoin = _context17.sent;

          if (besoin) {
            _context17.next = 10;
            break;
          }

          return _context17.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          besoin[0].engin = req.body.engin;
          besoin[0].nombre = req.body.nombre;
          besoin[0].prix = req.body.prix;
          besoin[0].zoneOperation = req.body.zoneOperation;
          besoin[0].dureeContrat = req.body.dureeContrat;
          besoin[0].detail = req.body.detail;
          besoin[0].activite = req.body.activite;
          besoin[0].save();
          return _context17.abrupt("return", res.status(200).json(besoin[0]));

        case 19:
          _context17.next = 37;
          break;

        case 21:
          _context17.next = 23;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0,
            "user_id": req.payload._id
          }));

        case 23:
          _besoin4 = _context17.sent;

          if (_besoin4) {
            _context17.next = 28;
            break;
          }

          return _context17.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 28:
          _besoin4[0].engin = req.body.engin;
          _besoin4[0].nombre = req.body.nombre;
          _besoin4[0].prix = req.body.prix;
          _besoin4[0].zoneOperation = req.body.zoneOperation;
          _besoin4[0].dureeContrat = req.body.dureeContrat;
          _besoin4[0].detail = req.body.detail;
          _besoin4[0].activite = req.body.activite;

          _besoin4[0].save();

          return _context17.abrupt("return", res.status(200).json(_besoin4[0]));

        case 37:
          _context17.next = 42;
          break;

        case 39:
          _context17.prev = 39;
          _context17.t0 = _context17["catch"](1);
          return _context17.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 42:
        case "end":
          return _context17.stop();
      }
    }
  }, null, null, [[1, 39]]);
};

module.exports.updateBesoinLeger = function _callee18(req, res) {
  var id, besoin, _besoin5;

  return regeneratorRuntime.async(function _callee18$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          id = req.params.id;
          _context18.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context18.next = 21;
            break;
          }

          _context18.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }));

        case 5:
          besoin = _context18.sent;

          if (besoin) {
            _context18.next = 10;
            break;
          }

          return _context18.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          besoin[0].engin = req.body.engin;
          besoin[0].nombre = req.body.nombre;
          besoin[0].prix = req.body.prix;
          besoin[0].zoneOperation = req.body.zoneOperation;
          besoin[0].dureeContrat = req.body.dureeContrat;
          besoin[0].detail = req.body.detail;
          besoin[0].activite = req.body.activite;
          besoin[0].save();
          return _context18.abrupt("return", res.status(200).json(besoin[0]));

        case 19:
          _context18.next = 37;
          break;

        case 21:
          _context18.next = 23;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0,
            "user_id": req.payload._id
          }));

        case 23:
          _besoin5 = _context18.sent;

          if (_besoin5) {
            _context18.next = 28;
            break;
          }

          return _context18.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 28:
          _besoin5[0].engin = req.body.engin;
          _besoin5[0].nombre = req.body.nombre;
          _besoin5[0].prix = req.body.prix;
          _besoin5[0].zoneOperation = req.body.zoneOperation;
          _besoin5[0].dureeContrat = req.body.dureeContrat;
          _besoin5[0].detail = req.body.detail;
          _besoin5[0].activite = req.body.activite;

          _besoin5[0].save();

          return _context18.abrupt("return", res.status(200).json(_besoin5[0]));

        case 37:
          _context18.next = 42;
          break;

        case 39:
          _context18.prev = 39;
          _context18.t0 = _context18["catch"](1);
          return _context18.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 42:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[1, 39]]);
};

module.exports.deleteBesoin = function _callee19(req, res) {
  var id, besoin, _besoin6;

  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          id = req.params.id;
          _context19.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context19.next = 15;
            break;
          }

          _context19.next = 5;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0
          }));

        case 5:
          besoin = _context19.sent;

          if (besoin) {
            _context19.next = 10;
            break;
          }

          return _context19.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          besoin[0]["delete"] = 1;
          besoin[0].save();
          return _context19.abrupt("return", res.status(200).json(besoin[0]));

        case 13:
          _context19.next = 25;
          break;

        case 15:
          _context19.next = 17;
          return regeneratorRuntime.awrap(Besoin.find({
            "_id": id,
            "delete": 0,
            "user_id": req.payload._id
          }));

        case 17:
          _besoin6 = _context19.sent;

          if (_besoin6) {
            _context19.next = 22;
            break;
          }

          return _context19.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 22:
          _besoin6[0]["delete"] = 1;

          _besoin6[0].save();

          return _context19.abrupt("return", res.status(200).json(_besoin6[0]));

        case 25:
          _context19.next = 30;
          break;

        case 27:
          _context19.prev = 27;
          _context19.t0 = _context19["catch"](1);
          return _context19.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 30:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[1, 27]]);
};

module.exports.traitementEngin = function _callee20(req, res) {
  var relation, flotte, objet;
  return regeneratorRuntime.async(function _callee20$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          idFlotte = req.params.idFlotte;
          idRelatiion = req.params.idRelatiion;
          _context20.prev = 2;
          _context20.next = 5;
          return regeneratorRuntime.awrap(Relation.find({
            "_id": idRelatiion
          }));

        case 5:
          relation = _context20.sent;
          _context20.next = 8;
          return regeneratorRuntime.awrap(Flotte.find({
            "_id": idFlotte
          }));

        case 8:
          flotte = _context20.sent;
          flotte[0].status = 1;
          relation[0].status = 1;
          flotte[0].save(); // console.log('RELAtion ', relation);

          if (relation) {
            _context20.next = 16;
            break;
          }

          return _context20.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 16:
          objet = {
            flotte_id: idFlotte,
            status: 1
          };
          relation[0].engin.push(objet);
          relation[0].save();
          return _context20.abrupt("return", res.status(200).json(relation[0]));

        case 20:
          _context20.next = 25;
          break;

        case 22:
          _context20.prev = 22;
          _context20.t0 = _context20["catch"](2);
          return _context20.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 25:
        case "end":
          return _context20.stop();
      }
    }
  }, null, null, [[2, 22]]);
};