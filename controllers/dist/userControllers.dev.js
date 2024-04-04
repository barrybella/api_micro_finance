"use strict";

//var User = require('../models/User');
var User = require('../models/Distributeur');

module.exports.CommandeByFournisseur = function _callee(req, res) {
  var fournisseur, users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fournisseur = "Fournisseur";
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "role": fournisseur
          }).sort({
            "createdAt": -1
          }).populate('pointage_id'));

        case 4:
          users = _context.sent;
          console.log("distributeur", users);

          if (users) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 10:
          return _context.abrupt("return", res.status(200).json(users));

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

module.exports.allUsersF = function _callee2(req, res) {
  var fournisseur, users;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          fournisseur = "Fournisseur";
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "role": fournisseur
          }).sort({
            "createdAt": -1
          }).populate('pointage_id'));

        case 4:
          users = _context2.sent;
          console.log("distributeur", users);

          if (users) {
            _context2.next = 10;
            break;
          }

          return _context2.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 10:
          return _context2.abrupt("return", res.status(200).json(users));

        case 11:
          _context2.next = 16;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          return _context2.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

module.exports.allUsersD = function _callee3(req, res) {
  var distributeur, users;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          distributeur = "Distributeur";
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "role": distributeur
          }).sort({
            "createdAt": -1
          }).populate('pointage_id'));

        case 4:
          users = _context3.sent;
          console.log("distributeur", users);

          if (users) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 10:
          return _context3.abrupt("return", res.status(200).json(users));

        case 11:
          _context3.next = 16;
          break;

        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](1);
          return _context3.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 16:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 13]]);
};

module.exports.allUsers = function _callee4(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(User.find({}).sort({
            "createdAt": -1
          }));

        case 3:
          users = _context4.sent;
          console.log("distributeur", users);

          if (users) {
            _context4.next = 9;
            break;
          }

          return _context4.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context4.abrupt("return", res.status(200).json(users));

        case 10:
          _context4.next = 15;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports.RevoqueAutoriser = function _callee5(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context5.sent;
          user[0].active = 1;
          user[0].save();

          if (user[0]) {
            _context5.next = 11;
            break;
          }

          return _context5.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 11:
          return _context5.abrupt("return", res.status(200).json(user[0]));

        case 12:
          _context5.next = 17;
          break;

        case 14:
          _context5.prev = 14;
          _context5.t0 = _context5["catch"](1);
          return _context5.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.Autoriser = function _callee6(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          id = req.params.id;
          _context6.prev = 1;
          _context6.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context6.sent;
          user[0].active = 0;
          user[0].save();

          if (user[0]) {
            _context6.next = 11;
            break;
          }

          return _context6.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 11:
          return _context6.abrupt("return", res.status(200).json(user[0]));

        case 12:
          _context6.next = 17;
          break;

        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](1);
          return _context6.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 17:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

module.exports.getUserById = function _callee7(req, res) {
  var id, user;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context7.sent;

          if (user) {
            _context7.next = 9;
            break;
          }

          return _context7.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context7.abrupt("return", res.status(200).json(user[0]));

        case 10:
          _context7.next = 15;
          break;

        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](1);
          return _context7.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports.telExist = function _callee8(req, res) {
  var tel, user;
  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          tel = req.params.tel;
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "tel": tel
          }));

        case 4:
          user = _context8.sent;

          if (user) {
            _context8.next = 9;
            break;
          }

          return _context8.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context8.abrupt("return", res.status(200).json(user));

        case 10:
          _context8.next = 15;
          break;

        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](1);
          return _context8.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports.emailExist = function _callee9(req, res) {
  var email, user;
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          email = req.params.email;
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "email": email
          }));

        case 4:
          user = _context9.sent;

          if (user) {
            _context9.next = 9;
            break;
          }

          return _context9.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context9.abrupt("return", res.status(200).json(user));

        case 10:
          _context9.next = 15;
          break;

        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](1);
          return _context9.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports.emailOrTelExist = function _callee10(req, res) {
  var value, user;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          value = req.params.value;
          _context10.prev = 1;
          _context10.next = 4;
          return regeneratorRuntime.awrap(User.find({
            $or: [{
              "tel": value
            }, {
              "email": {
                "$eq": value
              }
            }]
          }));

        case 4:
          user = _context10.sent;

          if (user) {
            _context10.next = 9;
            break;
          }

          return _context10.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context10.abrupt("return", res.status(200).json(user));

        case 10:
          _context10.next = 15;
          break;

        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](1);
          return _context10.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports.CodeExist = function _callee11(req, res) {
  var value, user;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          value = req.params.value;
          _context11.prev = 1;
          _context11.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "codes": value
          }));

        case 4:
          user = _context11.sent;

          if (user) {
            _context11.next = 9;
            break;
          }

          return _context11.abrupt("return", res.status(404).send(new Error('Érror 404 data note found...')));

        case 9:
          return _context11.abrupt("return", res.status(200).json(user));

        case 10:
          _context11.next = 15;
          break;

        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](1);
          return _context11.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 15:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

module.exports.setRamdom = function _callee12(req, res) {
  var tel;
  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          tel = req.params.tel;

        case 1:
        case "end":
          return _context12.stop();
      }
    }
  });
};

module.exports.updatePassword = function _callee13(req, res) {
  var id, user;
  return regeneratorRuntime.async(function _callee13$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          id = req.params.id;
          _context13.prev = 1;
          _context13.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context13.sent;
          user[0].setPassword(req.body.newPassword);
          user[0].codes = 0;
          user[0].save();

          if (!user) {
            _context13.next = 12;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(user[0]));

        case 12:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 13:
          _context13.next = 18;
          break;

        case 15:
          _context13.prev = 15;
          _context13.t0 = _context13["catch"](1);
          return _context13.abrupt("return", res.status(500).send(new Error('Erreur 500...')));

        case 18:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[1, 15]]);
};

module.exports.updateUser = function _callee14(req, res) {
  var id, user;
  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _context14.prev = 1;
          _context14.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context14.sent;

          if (user) {
            _context14.next = 9;
            break;
          }

          return _context14.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 9:
          user[0].name = req.body.name;
          user[0].email = req.body.email;
          user[0].commune = req.body.commune;
          user[0].ville = req.body.ville;
          user[0].quartier = req.body.quartier;
          user[0].tel = req.body.tel;
          user[0].nameEntreprise = req.body.nameEntreprise;
          user[0].type = req.body.type;
          user[0].devise = req.body.devise;
          user[0].logo = req.body.logo;
          user[0].save();
          return _context14.abrupt("return", res.status(200).json(user[0]));

        case 21:
          _context14.next = 26;
          break;

        case 23:
          _context14.prev = 23;
          _context14.t0 = _context14["catch"](1);
          return _context14.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 26:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.updateUserValidation = function _callee15(req, res) {
  var id, user, valider;
  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          id = req.params.id;
          _context15.prev = 1;
          _context15.next = 4;
          return regeneratorRuntime.awrap(User.find({
            "_id": id
          }));

        case 4:
          user = _context15.sent;
          valider = "confirmer";

          if (user) {
            _context15.next = 10;
            break;
          }

          return _context15.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          user[0].valider = valider;
          user[0].setPassword(req.body.password);
          user[0].save();
          return _context15.abrupt("return", res.status(200).json(user[0]));

        case 14:
          _context15.next = 19;
          break;

        case 16:
          _context15.prev = 16;
          _context15.t0 = _context15["catch"](1);
          return _context15.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 19:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[1, 16]]);
};