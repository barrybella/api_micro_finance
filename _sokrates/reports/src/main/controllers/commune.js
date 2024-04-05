const mongoose= require('mongoose')
//const commune = require('../models/commune')
const Commune= require('../models/commune')
const Zone= require('../models/Zone')

module.exports.getAllCommuneByRegion = function(req, res){

  let id = req.params.id;
    Commune.find({region_id: id})
  .then(commune=> res.status(201).json(commune))
  .catch(error=> res.status(400).json(error))
  
}
module.exports.getAllCommuneByZone = function(req, res){

  let id = req.params.id;
    Zone.find({commune_id: id})
  .then(commune=> res.status(201).json(commune))
  .catch(error=> res.status(400).json(error))
  
}




module.exports.addCommune = function(req, res){
  const  commune= new Commune()
     commune.libelle= req.body.libelle
     commune.region_id= req.body.region_id

     commune.save()
      .then(()=> res.status(201).json({message: "La commune a été inseré avec succes"}))
      .catch(error=> res.status(400).json(error))
  
  
}
// module.exports.updateCommune = function(req, res){
//   Commune.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
//   .then(()=> res.status(201).json({message: "La commune a été inseré avec succes"}))
//   .catch(error=> res.status(400).json(error))
  
// }

module.exports.updateCommune = function(req, res){
  Commune.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(201).json({message: "La commune a été inseré avec succes"}))
  .catch(error=> res.status(400).json(error))
  
}

module.exports.getCommuneByRegionId = function(req, res){
  Commune.find({pays_id: req.params._id})
  .then(commune=> res.status(201).json(commune))
  .catch(error=> res.status(400).json(error))
  
}

module.exports.deleteCommune = function(req, res){
  Commune.deleteOne({_id: req.params.id})
  .then(()=> res.status(201).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
}


module.exports.getCommuneById = function(req, res){
  Commune.find({_id: req.params.id})
  .then(commune=> res.status(201).json(commune))
  .catch(error=> res.status(400).json(error))
}

module.exports.getAllCommune= function(req, res){
  Commune.find({}).populate({path: 'region_id', populate: {path: 'pays_id'}})
  .then(commune=> res.status(200).json(commune))
  .catch(error=> res.status(400).json(error))
}



