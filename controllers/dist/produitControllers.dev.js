"use strict";

var Produit = require('../models/Agrega');

var Vaccination = require('../models/Vaccination');

module.exports.addProduit = function _callee(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          produit = Produit.insertMany(req.body);

          if (!produit) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.status(200).json(produit));

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

module.exports.addVaccination = function _callee2(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          produit = Vaccination.insertMany(req.body);

          if (!produit) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(produit));

        case 6:
          return _context2.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

module.exports.updateProduit = function _callee3(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Produit.find({
            "_id": id
          }));

        case 4:
          produit = _context3.sent;
          produit[0].marque = req.body.marque;
          produit[0].type = req.body.type;
          produit[0].prix = req.body.prix;
          produit[0].image = req.body.image;
          produit[0].save();

          if (!produit[0]) {
            _context3.next = 14;
            break;
          }

          return _context3.abrupt("return", res.status(200).json(produit[0]));

        case 14:
          return _context3.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 15:
          _context3.next = 20;
          break;

        case 17:
          _context3.prev = 17;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 17]]);
};

module.exports.deleteProduit = function _callee4(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Produit.find({
            "_id": id
          }));

        case 4:
          produit = _context4.sent;
          produit[0]["delete"] = 1;
          produit[0].save();

          if (!produit[0]) {
            _context4.next = 11;
            break;
          }

          return _context4.abrupt("return", res.status(200).json(produit[0]));

        case 11:
          return _context4.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 12:
          _context4.next = 17;
          break;

        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](1);
          return _context4.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.getProduits = function _callee5(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Produit.find({
            "delete": 0
          }).sort({
            "createdAt": -1
          }));

        case 3:
          produit = _context5.sent;

          if (!produit) {
            _context5.next = 9;
            break;
          }

          console.log("produit", produit);
          return _context5.abrupt("return", res.status(200).json(produit));

        case 9:
          return _context5.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports.getVaccination = function _callee6(req, res) {
  var produit;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Vaccination.find());

        case 3:
          produit = _context6.sent;

          if (!produit) {
            _context6.next = 8;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(produit));

        case 8:
          return _context6.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 9:
          _context6.next = 14;
          break;

        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 14:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.getProduit = function _callee7(req, res) {
  var id, produit;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(Produit.find({
            "_id": id,
            "delete": 0
          }));

        case 4:
          produit = _context7.sent;

          if (!produit) {
            _context7.next = 9;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(produit[0]));

        case 9:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context7.next = 15;
          break;

        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](1);
          return _context7.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 12]]);
};