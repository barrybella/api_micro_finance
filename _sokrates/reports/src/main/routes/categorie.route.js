const express = require('express');
var jwt = require('express-jwt');
 const categorieRoutes = express.Router();

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

categorieCotrollers = require('../controllers/categorieControllers');

categorieRoutes.route('/getBlogById/:id').get(categorieCotrollers.getBlogById);

categorieRoutes.route('/addBlog').post(auth, categorieCotrollers.addBlog);

categorieRoutes.route('/updateBlog/:id').put(categorieCotrollers.updateBlog);
categorieRoutes.route('/getBlog').get(categorieCotrollers.getBlog);
categorieRoutes.route('/deleteBlog/:id').get(categorieCotrollers.deleteBlog);
categorieRoutes.route('/getPaginatedCategorie/:page').get(categorieCotrollers.getPaginatedCategorie);

categorieRoutes.route('/addCategorie').post(auth, categorieCotrollers.addCategorie);
categorieRoutes.route('/addPassport').post(auth, categorieCotrollers.addPassport);
categorieRoutes.route('/getPaginatedPassport/:page').get(categorieCotrollers.getPaginatedPassport);

categorieRoutes.route('/updateCategorie/:id').put(categorieCotrollers.updateCategorie);
categorieRoutes.route('/getCategories/:id').get(categorieCotrollers.getCategories);
categorieRoutes.route('/getCategorie').get(categorieCotrollers.getCategorie);
categorieRoutes.route('/deleteCategorie/:id').get(categorieCotrollers.deleteCategorie);


//UPLOAD IMAGE AVATAR
categorieRoutes.route('/image').post(upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    const error = new Error('No File');
    error.httpStatusCode = 500;

    return next(error);
        // return res.json(`${req.file.path}`);
  }
  res.send(file);
  // else{
  //     return res.json(``);
  // } 
});

module.exports = categorieRoutes;
