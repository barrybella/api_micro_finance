"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Flotte = require('../models/Flotte');

function groupBy(tableauObjets, propriete) {
  return tableauObjets.reduce(function (acc, obj) {
    var cle = obj[propriete];

    if (!acc[cle]) {
      acc[cle] = [];
    }

    acc[cle].push(obj);
    return acc;
  }, {});
}

module.exports.bam = function _callee(req, res) {
  var flottes;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Flotte.aggregate([{
            $unwind: "$user_id"
          }, {
            $match: {
              "delete": 0,
              "status": 0
            }
          }, {
            $group: {
              "_id": {
                "user_id": "$user_id",
                "categorie": "$categorie"
              },
              "total": {
                $sum: 1
              }
            }
          }, {
            $lookup: {
              from: "users",
              localField: "user_id",
              foreignField: "user_id",
              as: "user_doc"
            }
          }]));

        case 3:
          flottes = _context.sent;

          if (!flottes) {
            _context.next = 8;
            break;
          }

          return _context.abrupt("return", res.status(200).json(flottes));

        case 8:
          return _context.abrupt("return", res.status(404).send(new Error('404 not found')));

        case 9:
          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).send(new Error('Erreur server 500...')));

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.addflote = function _callee2(req, res) {
  var flotte;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          flotte = Flotte.insertMany(req.body);

          if (!flotte) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.status(200).json(flotte));

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

module.exports.listflottMinier = function _callee3(req, res) {
  var flottes, _flottes;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context3.next = 13;
            break;
          }

          _context3.next = 4;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "categorie": 'mineral'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context3.sent;
          console.log(flottes[0]);

          if (!flottes) {
            _context3.next = 10;
            break;
          }

          return _context3.abrupt("return", res.status(200).json(flottes));

        case 10:
          return _context3.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context3.next = 21;
          break;

        case 13:
          _context3.next = 15;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "user_id": req.payload._id,
            "categorie": 'mineral'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 15:
          _flottes = _context3.sent;

          if (!_flottes) {
            _context3.next = 20;
            break;
          }

          return _context3.abrupt("return", res.status(200).json(_flottes));

        case 20:
          return _context3.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context3.next = 26;
          break;

        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 23]]);
};

module.exports.flotteClientStatus = function _callee4(req, res) {
  var flottes, _flottes2;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context4.next = 12;
            break;
          }

          _context4.next = 4;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "status": 0
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context4.sent;

          if (!flottes) {
            _context4.next = 9;
            break;
          }

          return _context4.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context4.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context4.next = 20;
          break;

        case 12:
          _context4.next = 14;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "user_id": req.payload._id,
            "status": 0
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 14:
          _flottes2 = _context4.sent;

          if (!_flottes2) {
            _context4.next = 19;
            break;
          }

          return _context4.abrupt("return", res.status(200).json(_flottes2));

        case 19:
          return _context4.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context4.next = 25;
          break;

        case 22:
          _context4.prev = 22;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.listflottAlls = function _callee5(req, res) {
  var flottes, _flottes3;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context5.next = 12;
            break;
          }

          _context5.next = 4;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context5.sent;

          if (!flottes) {
            _context5.next = 9;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context5.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context5.next = 20;
          break;

        case 12:
          _context5.next = 14;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "user_id": req.payload._id
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 14:
          _flottes3 = _context5.sent;

          if (!_flottes3) {
            _context5.next = 19;
            break;
          }

          return _context5.abrupt("return", res.status(200).json(_flottes3));

        case 19:
          return _context5.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context5.next = 25;
          break;

        case 22:
          _context5.prev = 22;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.flottesAll = function _callee6(req, res) {
  var flottes, _flottes4;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context6.next = 12;
            break;
          }

          _context6.next = 4;
          return regeneratorRuntime.awrap(Flotte.aggregate([{
            $unwind: "$user_id"
          }, {
            $match: {
              "delete": 0
            }
          }, {
            $group: {
              "_id": {
                "user_id": "$user_id",
                "categorie": "$categorie"
              },
              "total": {
                $sum: 1
              }
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 4:
          flottes = _context6.sent;

          if (!flottes) {
            _context6.next = 9;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context6.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context6.next = 20;
          break;

        case 12:
          _context6.next = 14;
          return regeneratorRuntime.awrap(Flotte.aggregate([{
            $unwind: "$user_id"
          }, {
            $match: {
              "delete": 0,
              "user_id": req.payload._id
            }
          }, {
            $group: {
              "_id": {
                "user_id": "$user_id",
                "categorie": "$categorie"
              },
              "total": {
                $sum: 1
              }
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 14:
          _flottes4 = _context6.sent;

          if (!_flottes4) {
            _context6.next = 19;
            break;
          }

          return _context6.abrupt("return", res.status(200).json(_flottes4));

        case 19:
          return _context6.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context6.next = 25;
          break;

        case 22:
          _context6.prev = 22;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.flottesAllMineral = function _callee7(req, res) {
  var flottes, _flottes5;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context7.next = 13;
            break;
          }

          _context7.next = 4;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "categorie": "mineral",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 4:
          flottes = _context7.sent;
          console.log('FLT GRP0', flottes);

          if (!flottes) {
            _context7.next = 10;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(flottes));

        case 10:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context7.next = 21;
          break;

        case 13:
          _context7.next = 15;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "user_id": req.payload._id,
              "categorie": "mineral",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 15:
          _flottes5 = _context7.sent;

          if (!_flottes5) {
            _context7.next = 20;
            break;
          }

          return _context7.abrupt("return", res.status(200).json(_flottes5));

        case 20:
          return _context7.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context7.next = 26;
          break;

        case 23:
          _context7.prev = 23;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 23]]);
};

module.exports.flottesAllMachine = function _callee8(req, res) {
  var flottes, _flottes6;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context8.next = 12;
            break;
          }

          _context8.next = 4;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "categorie": "machine",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 4:
          flottes = _context8.sent;

          if (!flottes) {
            _context8.next = 9;
            break;
          }

          return _context8.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context8.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context8.next = 20;
          break;

        case 12:
          _context8.next = 14;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "user_id": req.payload._id,
              "categorie": "machine",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 14:
          _flottes6 = _context8.sent;

          if (!_flottes6) {
            _context8.next = 19;
            break;
          }

          return _context8.abrupt("return", res.status(200).json(_flottes6));

        case 19:
          return _context8.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context8.next = 25;
          break;

        case 22:
          _context8.prev = 22;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.flottesAllPersonnel = function _callee9(req, res) {
  var flottes, _flottes7;

  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context9.next = 12;
            break;
          }

          _context9.next = 4;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "categorie": "personnel",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 4:
          flottes = _context9.sent;

          if (!flottes) {
            _context9.next = 9;
            break;
          }

          return _context9.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context9.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context9.next = 20;
          break;

        case 12:
          _context9.next = 14;
          return regeneratorRuntime.awrap(Flotte.aggregate([// { $unwind: "$user_id" },
          {
            $match: {
              "delete": 0,
              "user_id": req.payload._id,
              "categorie": "personnel",
              "status": 0
            }
          }, {
            $group: {
              "_id": "$user_id"
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "user_doc"
            }
          }]));

        case 14:
          _flottes7 = _context9.sent;

          if (!_flottes7) {
            _context9.next = 19;
            break;
          }

          return _context9.abrupt("return", res.status(200).json(_flottes7));

        case 19:
          return _context9.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context9.next = 25;
          break;

        case 22:
          _context9.prev = 22;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.allFlotte = function _callee10(req, res) {
  var flottes;
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0
          }).populate('relation_id').populate('flotte_id').sort({
            "createdAt": -1
          }));

        case 3:
          flottes = _context10.sent;

          if (!flottes) {
            _context10.next = 8;
            break;
          }

          return _context10.abrupt("return", res.status(200).json(flottes));

        case 8:
          return _context10.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 9:
          _context10.next = 14;
          break;

        case 11:
          _context10.prev = 11;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 14:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

module.exports.informationFlotte = function _callee11(req, res) {
  var id, flottes;
  return regeneratorRuntime.async(function _callee11$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params._id;
          _context11.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context11.next = 13;
            break;
          }

          _context11.next = 5;
          return regeneratorRuntime.awrap(Flotte.find({
            "user_id": id
          }));

        case 5:
          flottes = _context11.sent;

          if (!flottes) {
            _context11.next = 10;
            break;
          }

          return _context11.abrupt("return", res.status(200).json(flottes));

        case 10:
          return _context11.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context11.next = 13;
          break;

        case 13:
          _context11.next = 18;
          break;

        case 15:
          _context11.prev = 15;
          _context11.t0 = _context11["catch"](1);
          return _context11.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 18:
        case "end":
          return _context11.stop();
      }
    }
  }, null, null, [[1, 15]]);
};

module.exports.listflottMinierPersonnel = function _callee12(req, res) {
  var flottes, _flottes8;

  return regeneratorRuntime.async(function _callee12$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context12.next = 12;
            break;
          }

          _context12.next = 4;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "categorie": 'personnel'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context12.sent;

          if (!flottes) {
            _context12.next = 9;
            break;
          }

          return _context12.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context12.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context12.next = 20;
          break;

        case 12:
          _context12.next = 14;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "user_id": req.payload._id,
            "categorie": 'personnel'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 14:
          _flottes8 = _context12.sent;

          if (!_flottes8) {
            _context12.next = 19;
            break;
          }

          return _context12.abrupt("return", res.status(200).json(_flottes8));

        case 19:
          return _context12.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context12.next = 25;
          break;

        case 22:
          _context12.prev = 22;
          _context12.t0 = _context12["catch"](0);
          return _context12.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context12.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.listflottMachine = function _callee13(req, res) {
  var flottes, _Flotte$find, _flottes9;

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
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "categorie": 'machine'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context13.sent;

          if (!flottes) {
            _context13.next = 9;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context13.next = 20;
          break;

        case 12:
          _context13.next = 14;
          return regeneratorRuntime.awrap(Flotte.find((_Flotte$find = {
            "delete": 0,
            "user_id": req.payload._id
          }, _defineProperty(_Flotte$find, "user_id", req.payload._id), _defineProperty(_Flotte$find, "categorie", 'machine'), _Flotte$find)).populate('user_id').sort({
            "createdAt": -1
          }));

        case 14:
          _flottes9 = _context13.sent;

          if (!_flottes9) {
            _context13.next = 19;
            break;
          }

          return _context13.abrupt("return", res.status(200).json(_flottes9));

        case 19:
          return _context13.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context13.next = 25;
          break;

        case 22:
          _context13.prev = 22;
          _context13.t0 = _context13["catch"](0);
          return _context13.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context13.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.getFlottePersonel = function _callee14(req, res) {
  var flottes, _Flotte$find2, _flottes10;

  return regeneratorRuntime.async(function _callee14$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;

          if (!(req.payload.role == 'admin')) {
            _context14.next = 12;
            break;
          }

          _context14.next = 4;
          return regeneratorRuntime.awrap(Flotte.find({
            "delete": 0,
            "categorie": 'personnel'
          }).populate('user_id').sort({
            "createdAt": -1
          }));

        case 4:
          flottes = _context14.sent;

          if (!flottes) {
            _context14.next = 9;
            break;
          }

          return _context14.abrupt("return", res.status(200).json(flottes));

        case 9:
          return _context14.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 10:
          _context14.next = 20;
          break;

        case 12:
          _context14.next = 14;
          return regeneratorRuntime.awrap(Flotte.find((_Flotte$find2 = {
            "delete": 0,
            "user_id": req.payload._id
          }, _defineProperty(_Flotte$find2, "user_id", req.payload._id), _defineProperty(_Flotte$find2, "categorie", 'personnel'), _Flotte$find2)).populate('user_id').sort({
            "createdAt": -1
          }));

        case 14:
          _flottes10 = _context14.sent;

          if (!_flottes10) {
            _context14.next = 19;
            break;
          }

          return _context14.abrupt("return", res.status(200).json(_flottes10));

        case 19:
          return _context14.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 20:
          _context14.next = 25;
          break;

        case 22:
          _context14.prev = 22;
          _context14.t0 = _context14["catch"](0);
          return _context14.abrupt("return", res.status(500).send(new Error('Server Error...')));

        case 25:
        case "end":
          return _context14.stop();
      }
    }
  }, null, null, [[0, 22]]);
};

module.exports.getFloteById = function _callee15(req, res) {
  var flote, _flote;

  return regeneratorRuntime.async(function _callee15$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _id = req.params._id;
          _context15.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context15.next = 13;
            break;
          }

          _context15.next = 5;
          return regeneratorRuntime.awrap(Flotte.find({
            "_id": _id
          }));

        case 5:
          flote = _context15.sent;

          if (!flote) {
            _context15.next = 10;
            break;
          }

          return _context15.abrupt("return", res.status(200).json(flote[0]));

        case 10:
          return _context15.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context15.next = 21;
          break;

        case 13:
          _context15.next = 15;
          return regeneratorRuntime.awrap(Flotte.find({
            "_id": _id
          }));

        case 15:
          _flote = _context15.sent;

          if (!_flote) {
            _context15.next = 20;
            break;
          }

          return _context15.abrupt("return", res.status(200).json(_flote[0]));

        case 20:
          return _context15.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context15.next = 26;
          break;

        case 23:
          _context15.prev = 23;
          _context15.t0 = _context15["catch"](1);
          return _context15.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context15.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.getFloteByIdMachine = function _callee16(req, res) {
  var flote, _flote2;

  return regeneratorRuntime.async(function _callee16$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _id = req.params._id;
          _context16.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context16.next = 13;
            break;
          }

          _context16.next = 5;
          return regeneratorRuntime.awrap(Flotte.find({
            "categorie": 'machine',
            "_id": _id
          }));

        case 5:
          flote = _context16.sent;

          if (!flote) {
            _context16.next = 10;
            break;
          }

          return _context16.abrupt("return", res.status(200).json(flote[0]));

        case 10:
          return _context16.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context16.next = 21;
          break;

        case 13:
          _context16.next = 15;
          return regeneratorRuntime.awrap(Flotte.find({
            "categorie": 'machine',
            "_id": _id,
            "user_id": req.payload._id
          }));

        case 15:
          _flote2 = _context16.sent;

          if (!_flote2) {
            _context16.next = 20;
            break;
          }

          return _context16.abrupt("return", res.status(200).json(_flote2[0]));

        case 20:
          return _context16.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context16.next = 26;
          break;

        case 23:
          _context16.prev = 23;
          _context16.t0 = _context16["catch"](1);
          return _context16.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context16.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.getFloteByIdPersonnel = function _callee17(req, res) {
  var flote, _flote3;

  return regeneratorRuntime.async(function _callee17$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _id = req.params._id;
          _context17.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context17.next = 13;
            break;
          }

          _context17.next = 5;
          return regeneratorRuntime.awrap(Flotte.find({
            "categorie": 'personnel',
            "_id": _id,
            "delete": 0
          }));

        case 5:
          flote = _context17.sent;

          if (!flote) {
            _context17.next = 10;
            break;
          }

          return _context17.abrupt("return", res.status(200).json(flote[0]));

        case 10:
          return _context17.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 11:
          _context17.next = 21;
          break;

        case 13:
          _context17.next = 15;
          return regeneratorRuntime.awrap(Flotte.find({
            "categorie": 'personnel',
            "_id": _id,
            "user_id": req.payload._id,
            "delete": 0
          }));

        case 15:
          _flote3 = _context17.sent;

          if (!_flote3) {
            _context17.next = 20;
            break;
          }

          return _context17.abrupt("return", res.status(200).json(_flote3[0]));

        case 20:
          return _context17.abrupt("return", res.status(404).send(new Error('Erreur 404...')));

        case 21:
          _context17.next = 26;
          break;

        case 23:
          _context17.prev = 23;
          _context17.t0 = _context17["catch"](1);
          return _context17.abrupt("return", res.status(200).send(new Error('Server Error...')));

        case 26:
        case "end":
          return _context17.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.modifieFlote = function _callee18(req, res) {
  var id, flote, _flote4;

  return regeneratorRuntime.async(function _callee18$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          id = req.params.id;
          _context18.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context18.next = 26;
            break;
          }

          _context18.next = 5;
          return regeneratorRuntime.awrap(Flotte.find({
            "_id": id
          }));

        case 5:
          flote = _context18.sent;

          if (flote) {
            _context18.next = 10;
            break;
          }

          return _context18.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          flote[0].nom = req.body.nom;
          flote[0].marque = req.body.marque;
          flote[0].type_engin = req.body.type_engin;
          flote[0].capacite = req.body.capacite;
          flote[0].date_mise_circulation = req.body.date_mise_circulation;
          flote[0].poids = req.body.poids;
          flote[0].kilometre = req.body.kilometre;
          flote[0].etat_camion = req.body.etat_camion;
          flote[0].autre_caracteristique = req.body.autre_caracteristique;

          if (req.body.photos.length > 0) {
            flote[0].photos = req.body.photos;
          }

          if (req.body.photo_assurance.length > 0) {
            flote[0].photo_assurance = req.body.photo_assurance;
          }

          if (req.body.photo_grise.length > 0) {
            flote[0].photo_grise = req.body.photo_grise;
          }

          flote[0].save();
          return _context18.abrupt("return", res.status(200).json(flote[0]));

        case 24:
          _context18.next = 47;
          break;

        case 26:
          _context18.next = 28;
          return regeneratorRuntime.awrap(Flotte.find({
            "_id": id,
            "user_id": req.payload._id
          }));

        case 28:
          _flote4 = _context18.sent;

          if (_flote4) {
            _context18.next = 33;
            break;
          }

          return _context18.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 33:
          _flote4[0].nom = req.body.nom;
          _flote4[0].marque = req.body.marque;
          _flote4[0].type_engin = req.body.type_engin;
          _flote4[0].capacite = req.body.capacite;
          _flote4[0].date_mise_circulation = req.body.date_mise_circulation;
          _flote4[0].poids = req.body.poids;
          _flote4[0].kilometre = req.body.kilometre;
          _flote4[0].etat_camion = req.body.etat_camion;
          _flote4[0].autre_caracteristique = req.body.autre_caracteristique;

          if (req.body.photos.length > 0) {
            _flote4[0].photos = req.body.photos;
          }

          if (req.body.photo_assurance.length > 0) {
            _flote4[0].photo_assurance = req.body.photo_assurance;
          }

          if (req.body.photo_grise.length > 0) {
            _flote4[0].photo_grise = req.body.photo_grise;
          }

          _flote4[0].save();

          return _context18.abrupt("return", res.status(200).json(_flote4[0]));

        case 47:
          _context18.next = 52;
          break;

        case 49:
          _context18.prev = 49;
          _context18.t0 = _context18["catch"](1);
          return _context18.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 52:
        case "end":
          return _context18.stop();
      }
    }
  }, null, null, [[1, 49]]);
};

module.exports.deleteFlote = function _callee19(req, res) {
  var id, flote, _flote5;

  return regeneratorRuntime.async(function _callee19$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          id = req.params.id;
          _context19.prev = 1;

          if (!(req.payload.role == 'admin')) {
            _context19.next = 13;
            break;
          }

          _context19.next = 5;
          return regeneratorRuntime.awrap(Flotte.remove({
            "_id": id
          }));

        case 5:
          flote = _context19.sent;

          if (flote) {
            _context19.next = 10;
            break;
          }

          return _context19.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 10:
          return _context19.abrupt("return", res.status(200).json(flote[0]));

        case 11:
          _context19.next = 21;
          break;

        case 13:
          _context19.next = 15;
          return regeneratorRuntime.awrap(Flotte.remove({
            "_id": id,
            "user_id": req.payload._id
          }));

        case 15:
          _flote5 = _context19.sent;

          if (_flote5) {
            _context19.next = 20;
            break;
          }

          return _context19.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 20:
          return _context19.abrupt("return", res.status(200).json(_flote5[0]));

        case 21:
          _context19.next = 26;
          break;

        case 23:
          _context19.prev = 23;
          _context19.t0 = _context19["catch"](1);
          return _context19.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 26:
        case "end":
          return _context19.stop();
      }
    }
  }, null, null, [[1, 23]]);
};

module.exports.testFlotte = function _callee20(req, res) {
  var id, flottes;
  return regeneratorRuntime.async(function _callee20$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          id = req.params.id; // flottes = [];

          _context20.prev = 1;
          _context20.next = 4;
          return regeneratorRuntime.awrap(Flotte.aggregate([{
            $unwind: "$user_id"
          }, {
            $match: {
              "user_id": req.payload._id
            }
          }, {
            $group: {
              "_id": "$user_id",
              "total": {
                $sum: 1
              }
            }
          }, {
            $lookup: {
              from: "users",
              localField: "_id",
              foreignField: "_id",
              as: "patient_doc"
            }
          }]));

        case 4:
          flottes = _context20.sent;

          if (flottes) {
            _context20.next = 9;
            break;
          }

          return _context20.abrupt("return", res.status(404).send(new Error('Utilisateur not found 404')));

        case 9:
          return _context20.abrupt("return", res.status(200).json(flottes));

        case 10:
          _context20.next = 15;
          break;

        case 12:
          _context20.prev = 12;
          _context20.t0 = _context20["catch"](1);
          return _context20.abrupt("return", res.status(500).send(new Error('Erreur de server 500...')));

        case 15:
        case "end":
          return _context20.stop();
      }
    }
  }, null, null, [[1, 12]]);
};