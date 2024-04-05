const mongoose= require('mongoose')
const Region= require('../models/region')


module.exports.addRegion = function(req, res){
  const  region= new Region()
     region.libelle= req.body.libelle
     region.pays_id= req.body.pays_id

     region.save()
      .then(()=> res.status(201).json({message: "La region a été inseré avec succes"}))
      .catch(error=> res.status(400).json(error))
  
  
}

module.exports.getAllRegion= function(req, res){
  Region.find({}).populate('pays_id')
  .then(region=> res.status(200).json(region))
  .catch(error=> res.status(400).json(error))
}


module.exports.updateRegion = function(req, res){
  Region.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "La region a été inseré avec succes"}))
  .catch(error=> res.status(400).json(error))
  
  
}


module.exports.getRegionByPaysId = function(req, res){
  Region.find({pays_id: req.params.id}).populate('pays_id')
  .then(regions=> res.status(201).json(regions))
  .catch(error=> res.status(400).json(error))
  
  
}

module.exports.deleteRegion = function(req, res){
  Region.deleteOne({_id: req.params.id})
  .then(()=> res.status(200).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
  
  
}


module.exports.getRegionById = function(req, res){
  Region.find({_id: req.params.id}).populate('pays_id')
  .then(region=> res.status(201).json(region))
  .catch(error=> res.status(400).json(error))
  
  
}


