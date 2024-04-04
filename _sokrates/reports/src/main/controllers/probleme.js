const mongoose= require('mongoose')
const Probleme= require('../models/probleme')


module.exports.addProbleme = function(req, res){
  const  probleme= new Probleme()
     probleme.statutId= req.body.statutId
     probleme.libelle= req.body.libelle
     probleme.observations= req.body.observations

     probleme.save()
      .then(()=> res.status(201).json({message: "La probleme a été inseré avec succes"}))
      .catch(error=> res.status(400).json(error))
  
  
}

module.exports.getAllProbleme = function(req, res){
  Probleme.find({})
  .then(probleme=> res.status(200).json(probleme))
  .catch(error=> res.status(400).json(error))
}

module.exports.getProblemeById = function(req, res){
  Probleme.find({_id: req.params.id})
  .then(region=> res.status(201).json(region))
  .catch(error=> res.status(400).json(error))
  
  
}
module.exports.updateProbleme = function(req, res){
  Probleme.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "La probleme a été inseré avec succes"}))
  .catch(error=> res.status(400).json(error))
  
  
}



module.exports.deleteProbleme = function(req, res){
  Probleme.deleteOne({_id: req.params.id})
  .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
  
  
}


module.exports.getProblemeByStatutId = function(req, res){
  Probleme.find({statutId: req.params.id}).populate('statutId')
  .then(regions=> res.status(201).json(regions))
  .catch(error=> res.status(400).json(error))
  
  
}
