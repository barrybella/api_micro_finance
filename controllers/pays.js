const mongoose= require('mongoose')
const Pays= require('../models/pays')


module.exports.addPays=  function(req, res){
  const  pays= new Pays()
     pays.libelle= req.body.libelle
     pays.save()
      .then(()=> res.status(201).json({message: "Le pays a été inseré avec succes"}))
      .catch(error=> res.status(400).json(error))
  
  
}

module.exports.updatePays= function(req, res){
  Pays.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "Le pays a été modifié avec succes"}))
  .catch(error=> res.status(400).json(error))
}




module.exports.getAllPays= function(req, res){

  Pays.find({})
  .then(pays=> res.status(201).json(pays))
  .catch(error=> res.status(400).json(error))
}


module.exports.getPaysById= function(req, res){
  Pays.find({_id: req.params.id})
  .then(pays=> res.status(201).json(pays))
  .catch(error=> res.status(400).json(error))
}

module.exports.deletePays= function(req, res){
  Pays.deleteOne({_id: req.params.id})
  .then(()=> res.status(201).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
}







