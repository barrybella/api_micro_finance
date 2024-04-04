const mongoose= require('mongoose')
const Statut= require('../models/statut')


module.exports.addStatut = function(req, res){
  const  statut= new Statut()
  statut.libelle= req.body.libelle
  statut.ordre= req.body.ordre
     statut.observations= req.body.observations

     statut.save()
      .then(()=> res.status(201).json({message: "La statut a été inseré avec succes"}))
      .catch(error=> res.status(400).json(error))
  
  
}

module.exports.getAllStatut= function(req, res){
  Statut.find({}).sort({"ordre": 1})
  .then(statut=> res.status(200).json(statut))
  .catch(error=> res.status(400).json(error))
}

module.exports.getStatutById = function(req, res){
  Statut.find({_id: req.params.id})
  .then(region=> res.status(201).json(region))
  .catch(error=> res.status(400).json(error))
  
  
}
module.exports.updateStatut = function(req, res){
  Statut.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "La statut a été inseré avec succes"}))
  .catch(error=> res.status(400).json(error))
  
  
}



module.exports.deleteStatut = function(req, res){
  Statut.deleteOne({_id: req.params.id})
  .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
  
  
}



