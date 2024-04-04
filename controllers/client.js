const mongoose= require('mongoose')
const Client= require('../models/client')


module.exports.addClient=  function(req, res){

  const  client= new Client()
     client.name= req.body.name
     client.prenoms= req.body.prenoms
     client.telephone= req.body.telephone
     client.type_identite= req.body.type_identite
     client.numero_piece= req.body.numero_piece
     client.numero_compte= req.body.numero_compte

     client.user_id= req.body.user_id
      client.save()
       .then(()=> res.status(201).json({message: "Le client a été inseré avec succes"}))
       .catch(error=> res.status(400).json(error))
  
  
}

module.exports.updateClient= function(req, res){
  Client.updateOne({_id: req.params.id}, {...req.body}, {_id: req.params.id})
  .then(()=> res.status(200).json({message: "Le client a été modifié avec succes"}))
  .catch(error=> res.status(400).json(error))
}




module.exports.getAllClient= function(req, res){
  const { page = req.params.page, limit = 10 } = req.query;

  let user_id = req.payload._id;

  const options = {
      page: page,
      limit: limit,
      populate: {
          path: 'fournisseur_id'
      },
      populate: {
          path: "produit_id",
          populate: {
              path: "categorie_id"
          }
      },
      sort: {
          "createdAt": -1
      }
  }

  Client.find({})
  .then(client=> res.status(201).json(client))
  .catch(error=> res.status(400).json(error))
}

module.exports.getPaginatedClient=  async function(req, res){
  const { page = req.params.page, limit = 10 } = req.query;
  const options = {
      page: page,
      limit: limit,
      // populate: {
      //     path: 'fournisseur_id'
      // },
      // populate: {
      //     path: "produit_id",
      //     populate: {
      //         path: "categorie_id"
      //     }
      // },
      sort: {
          "createdAt": -1
      }
  }
  try {
    let stock = await Client.paginate({"user_id":req.params.id}, options)
    if (stock) {

        return res.status(200).json(stock);
        // return res.status(200).json(stocks);

    } else {
        return res.status(404).send(new Error('Erreur 404...'))
    }
} catch (error) {
    console.log(error)
    return res.status(500).send(new Error('Server Error...'))
}
}


module.exports.getClientById= function(req, res){
  Client.find({_id: req.params.id})
  .then(client=> res.status(201).json(client))
  .catch(error=> res.status(400).json(error))
}

module.exports.deleteClient= function(req, res){
  Client.deleteOne({_id: req.params.id})
  .then(()=> res.status(201).json({succes: "Suppression bien reussie"}))
  .catch(error=> res.status(400).json(error))
}







