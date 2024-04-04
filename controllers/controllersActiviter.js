const Chantier  = require("../models/Activiter")


module.exports.deleteService = async function(req, res){
    let id = req.params.id;
    let id_service = req.params.service_id;
  
      try{

        let activiter = await Chantier.find({"_id":id}).sort({"createdAt": -1});

    

       
        activiter[0].services.forEach(result => {
           if(result._id == id_service){
               result.remove();
              //result.save();
            
           }
          
        });
        activiter[0].save();
        return res.status(200).json(activiter);

 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.deleteProduit = async function(req, res){
    let id = req.params.id;
    let id_service = req.params.service_id;

      try{

	let activiter = await Chantier.find({"_id":id}).sort({"createdAt": -1});




        activiter[0].produits.forEach(result => {
           if(result._id == id_service){
               result.remove();
              //result.save();

           }

	});
	activiter[0].save();
        return res.status(200).json(activiter);


      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }


module.exports.deleteMessage = async function(req, res){
    let id = req.params.id;
    let id_service = req.params.service_id;

      try{

	let activiter = await Chantier.find({"_id":id}).sort({"createdAt": -1});




        activiter[0].messages.forEach(result => {
           if(result._id == id_service){
               result.remove();
              //result.save();

           }

	});
	activiter[0].save();
        return res.status(200).json(activiter);


      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }




module.exports.updateProduit = async function(req, res){
    let id = req.params.id;
    let id_service = req.params.service_id;

      try{

        let activiter = await Chantier.find({"_id":id}).sort({"createdAt": -1});




        activiter[0].produits.forEach(result => {
           if(result._id == id_service){
         result.marque = req.body.marque,
          result.cout = req.body.cout,
          result.unite = req.body.unite,
          result.produit_id = req.body.produit_id
           }
	});
	activiter[0].save();
        return res.status(200).json(activiter[0]);


      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }
module.exports.updateService = async function(req, res){
    let id = req.params.id;
    let id_service = req.params.service_id;
  
      try{

        let activiter = await Chantier.find({"_id":id}).sort({"createdAt": -1});

    

       
        activiter[0].services.forEach(result => {
           if(result._id == id_service){
            result.name = req.body.name,
          result.description = req.body.description,
          result.cout = req.body.cout,
          result.unite = req.body.unite,
          result.prix_unitaire = req.body.prix_unitaire,
          result.images = req.file.path
           }
        });
        activiter[0].save();
        return res.status(200).json(activiter[0]);

 
      } catch (error) {
          return res.status(500).send(new Error('Server Error...'))
      }
  }

module.exports.getActiviter = async function(req, res){
   let id = req.params.id
    try{

        let chantier = await Chantier.find({"levele_id":id}).sort({"createdAt": -1}).populate('user_id').populate('service_id').populate('produits.produit_id');


       // console.log('bella',stock);
         if (chantier ) {

            return res.status(200).json(chantier);

        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.addService = async function (req, res){
 
            try{
          
                   let activiter_id = req.params.id
                   let service  = await Chantier.find({"_id":activiter_id});

                  var object = {
                  name : req.body.name,
                  description : req.body.description,
                  cout : req.body.cout,
                  images  : req.file.path ,
                  unite : req.body.unite ,
                  prix_unitaire : req.body.prix_unitaire 
                    }
                service[0].services.push(object);
                 	service[0].save();
                 



              if(service){
                      return res.status(200).json({"message": 'Service Ajouter'});

                     }else{
                     return res.status(500).send(new Error('Erreur de server 500...'));
                 }
      } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}  
module.exports.addService = async function (req, res){

            try{

                   let activiter_id = req.params.id
                   let service  = await Chantier.find({"_id":activiter_id});

                  var object = {
                  name : req.body.name,
                  description : req.body.description,
                  cout : req.body.cout,
                  images  : req.file.path ,
                  unite : req.body.unite ,
                  prix_unitaire : req.body.prix_unitaire
                    }
                service[0].services.push(object);
                        service[0].save();




              if(service){
                      return res.status(200).json({"message": 'Service Ajouter'});

                     }else{
                     return res.status(500).send(new Error('Erreur de server 500...'));
                 }
      } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}
module.exports.addProduit = async function (req, res){

            try{

                   let activiter_id = req.params.id
                   let service  = await Chantier.find({"_id":activiter_id});

                  var object = {
                  marque : req.body.marque,
                  unite : req.body.unite,
                  cout : req.body.cout,
                  produit_id : req.body.produit_id
                    }
                service[0].produits.push(object);
                        service[0].save();




              if(service){
                      return res.status(200).json({"message": 'Produit Ajouter'});

                     }else{
                     return res.status(500).send(new Error('Erreur de server 500...'));
                 }
      } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

} 
module.exports.addMessage = async function (req, res){

            try{

                   let activiter_id = req.params.id
                   let service  = await Chantier.find({"_id":activiter_id});

                  var object = {
                  message : req.body.message,
                  user_id : req.body.user_id
                    }
                service[0].messages.push(object);
                        service[0].save();




              if(service){
                      return res.status(200).json({"message": 'Produit Ajouter'});

                     }else{
                     return res.status(500).send(new Error('Erreur de server 500...'));
                 }
      } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }

}  

module.exports.addActiviter = (req, res) => {

        const chantier = new Chantier(req.body)
        chantier.save((err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json('Success')
            }
	})

}
module.exports.updateImageActiviter = async function(req, res){
   let id =req.params.id;
 try{
     	let user = await Chantier.find({"_id":id});

        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            var object = {
        images: req.file.path};
            user[0].image.push(object);
            user[0].save();
            return res.status(200).json({"message": 'Image modifiée'});
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}

module.exports.updateAudioActiviter = async function(req, res){
   let id =req.params.id;
 try{
     	let user = await Chantier.find({"_id":id});

        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            var object = {
          audios: req.file.path};
           console.log("groupe",object);
            user[0].audio.push(object);
            user[0].save();
            return res.status(200).json({"message": 'Video  modifiée'});
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}

module.exports.updateVideoActiviter = async function(req, res){
   let id =req.params.id;
 try{
     	let user = await Chantier.find({"_id":id});

        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            var object = {
          videos: req.file.path};
           console.log("groupe",object);
            user[0].vid.push(object);
            user[0].save();
            return res.status(200).json({"message": 'Video  modifiée'});
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
module.exports.updateActiviter = (req, res) => {
    const id = req.params.id
    Chantier.findByIdAndUpdate(id, req.body, (err, chantier) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json('modification effectu�e')
        }
    })
}



module.exports.deleteActiviter = (req, res) => {
    const id = req.params.id

        Chantier.findByIdAndRemove(id, (err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json('Supprimer')
            }
	})

}
