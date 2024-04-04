var Produit = require('../models/Agrega');
var Categorie = require('../models/Categorie');
const Vaccination = require('../models/Vaccination');
const Blog = require('../models/Bloge');
const Passport = require('../models/Passport');





module.exports.getPaginatedPassport = async function(req, res){

    const { page = req.params.page, limit = 5} = req.query;
  
    try{
        const options={
            page: page,
            limit: limit
        }
       
        // let produit = await Produit.find({"delete": 0, "distributeur_id": req.params.user_id}).sort({"createdAt": -1}).populate('categorie_id');
        const produit = await Passport.paginate({"delete": 0}, options);
        console.log("barry",produit)
        if (produit) {
            return res.status(200).json(produit);
             }
            else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.addPassport = async function(req, res){
    console.log("bella",req.body);
    try{
      
        let passport = Passport.insertMany(req.body);
       console.log("data",passport);
         if (passport) {
            return res.status(200).json(passport);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getPaginatedCategorie = async function(req, res){
    const { page = req.params.page, limit = 10 } = req.query;
    console.log(req.params.page)
    try{
      const categorie = await Categorie.paginate({"delete": 0}, { page, limit });
        // let categorie = await Categorie.find({"delete": 0}).sort({"createdAt": -1});
         if (categorie) {

           
      return res.status(200).json(categorie);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}



module.exports.addBlog = async function(req, res){
  try{
      let categorie = Blog.insertMany(req.body);
           console.log("groupe",req.body);
       if (categorie) {

          return res.status(200).json(categorie);
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
  } catch (error) {
      return res.status(500).send(new Error('Server Error...'))
  }
}

module.exports.updateBlog = async function(req, res){
  let id = req.params.id;
   try{
       let categorie = await Blog.find({"_id": id});

       categorie[0].titre = req.body.titre;
       categorie[0].description = req.body.description;
       categorie[0].image = req.body.image;
      categorie[0].distributeur_id = req.body.distributeur_id;

       categorie[0].save();

       if  (categorie[0]) {
           return res.status(200).json(categorie[0]);
       } else {
           return res.status(404).send(new Error('Erreur 404...'))
       }
   } catch (error) {
       return res.status(500).send(new Error('Server Error...'))
   }
}


module.exports.getBlogById = async function(req, res){
   let id =req.params.id;   
 try{
 //       let id =req.params.id;
        
        let categorie = await Blog.find({"_id": id}).sort({"createdAt": -1});
         if (categorie) {

           console.log("donnee",categorie);
      return res.status(200).json(categorie);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.deleteBlog = async function(req, res){
  id = req.params.id;
  try{
      let categorie = await Blog.remove({"_id": id});

      

      if (categorie) {
          return res.status(200).json(categorie);
      } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
  } catch (error) {
      return res.status(500).send(new Error('Server Error...'))
  }
}
module.exports.getBlog = async function(req, res){
  try{


      let categorie = await Blog.find({"delete": 0}).sort({"createdAt": -1});
       if (categorie) {

         console.log("donnee",categorie);
    return res.status(200).json(categorie);
           } else {
          return res.status(404).send(new Error('Erreur 404...'))
      }
  } catch (error) {
      return res.status(500).send(new Error('Server Error...'))
  }
}










module.exports.addCategorie = async function(req, res){
    try{
        let categorie = Categorie.insertMany(req.body);
             console.log("groupe",req.body);
         if (categorie) {
            return res.status(200).json(categorie);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.updateCategorie = async function(req, res){
    let id = req.params.id;
     try{
         let categorie = await Categorie.find({"_id": id});
        
         categorie[0].nom = req.body.nom;
         categorie[0].variation = req.body.variation;        
         categorie[0].image = req.body.image;
        categorie[0].distributeur_id = req.body.distributeur_id;
         
         categorie[0].save();
 
         if  (categorie[0]) {
             return res.status(200).json(categorie[0]);
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }



module.exports.deleteCategorie = async function(req, res){
    id = req.params.id;
    try{
        let categorie = await Categorie.find({"_id": id});

        categorie[0].delete = 1;
        categorie[0].save();

        if (categorie[0]) {
            return res.status(200).json(categorie[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getCategorie = async function(req, res){
    try{
        
        
        let categorie = await Categorie.find({"delete": 0}).sort({"createdAt": -1});
         if (categorie) {

           console.log("donnee",categorie);
      return res.status(200).json(categorie);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.getAllCategorie = async function(req, res){
    try{


        let categorie = await Categorie.find({"delete": 0}).sort({"createdAt": -1});
         if (categorie) {

           console.log("donnee",categorie);
      return res.status(200).json(categorie);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.getCategories = async function(req, res){
    try{
        let id =req.params.id;
        
        let categorie = await Categorie.find({"_id": id}).sort({"createdAt": -1});
         if (categorie) {

           console.log("donnee",categorie);
      return res.status(200).json(categorie[0]);
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.echantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
          produit[0].echantillon = 1;
          produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.Activechantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
        produit[0].echantillon = 0;
        produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

