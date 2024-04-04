const express = require('express');
var jwt = require('express-jwt');
 const projetRoutes = express.Router();

var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload',
  algorithms: ['HS256']
});


const multer = require('multer');
const mkdirp = require('mkdirp');
const bodyParser= require('body-parser');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const dir = './boutiques';
      mkdirp(dir, err => cb(err, dir))
  },
  filename: (req, file, cb) => {
      cb(null, new Date().getTime()+ "-" + file.originalname)
  }
});
const upload = multer({ storage: storage })




projetCotrollers = require('../controllers/controllersProjet');
activiterCotrollers = require('../controllers/controllersActiviter');
leveleCotrollers = require('../controllers/controllersLevele');
serviceCotrollers = require('../controllers/controllersService');

projetRoutes.route('/getService/:id').get(serviceCotrollers.getService);
//projetRoutes.route('/addService').post(serviceCotrollers.addService);
projetRoutes.route('/deleteService/:id/:service_id').get(activiterCotrollers.deleteService);
//projetRoutes.route('/updateService/:id').put(serviceCotrollers.updateService);

projetRoutes.route('/videoActiviter/:id').post(upload.single('videos'), activiterCotrollers.updateVideoActiviter);
projetRoutes.route('/audioActiviter/:id').post(upload.single('audios'), activiterCotrollers.updateAudioActiviter);
projetRoutes.route('/updateService/:id/:service_id').post(upload.single('images'), activiterCotrollers.updateService);
projetRoutes.route('/deleteProduit/:id/:service_id').get(activiterCotrollers.deleteProduit);

projetRoutes.route('/deleteMessage/:id/:service_id').get(activiterCotrollers.deleteMessage);

projetRoutes.route('/addMessage/:id').post( activiterCotrollers.addMessage);
projetRoutes.route('/addProduit/:id').post( activiterCotrollers.addProduit);
projetRoutes.route('/addService/:id').post(upload.single('images'), activiterCotrollers.addService);
projetRoutes.route('/updateProduit/:id/:service_id').put(activiterCotrollers.updateProduit);
projetRoutes.route('/getLevele/:id').get(leveleCotrollers.getLevele);
projetRoutes.route('/addLevele').post(leveleCotrollers.addLevele);
projetRoutes.route('/deleteLevele/:id').get(leveleCotrollers.deleteLevele);
projetRoutes.route('/updateLevele/:id').put(leveleCotrollers.updateLevele);
projetRoutes.route('/getActiviter/:id').get(activiterCotrollers.getActiviter);
projetRoutes.route('/addActiviter').post(activiterCotrollers.addActiviter);
projetRoutes.route('/deleteActiviter/:id').get(activiterCotrollers.deleteActiviter);
projetRoutes.route('/updateActiviter/:id').put(activiterCotrollers.updateActiviter);
projetRoutes.route('/getProjet').get(projetCotrollers.getProjet);
projetRoutes.route('/addProjet').post(projetCotrollers.addProjet);
projetRoutes.route('/deleteProjet/:id').get(projetCotrollers.deleteProjet);
projetRoutes.route('/updateProjet/:id').put(projetCotrollers.updateProjet);
projetRoutes.route('/avatarProjet/:id').post(upload.single('images'), projetCotrollers.updateImage);
projetRoutes.route('/avatarActiviter/:id').post(upload.single('images'), activiterCotrollers.updateImageActiviter);

module.exports = projetRoutes;
