const Chantier  = require("../models/Service")



module.exports.getService = async function(req, res){
        let activiter_id = req.params.id;  
     try{
 
         let service = await Chantier.find({"activiter_id":activiter_id}).sort({"createdAt": -1});
 
 
        // console.log('bella',stock);
          if (service ) {
 
             return res.status(200).json(service);
 
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.addService = (req, res) => {
                    var service  = new Chantier();
                  service.name = req.body.name;
                  service.description = req.body.description ;
                  service.cout = req.body.cout ;
                  service.activiter_id = req.body.activiter_id ;
                  service.images  = req.file.path ;
                  service.unite = req.body.unite ;
                service.prix_unitaire = req.body.prix_unitaire ;
                  service.save();
              if(service){
                      return res.status(200).json({"message": 'Service Ajouter'});

                     }else{
                     return res.status(500).send(new Error('Erreur de server 500...'));
                 }

}
module.exports.updateImageService = async function(req, res){
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


module.exports.updateService = (req, res) => {
    const id = req.params.id
    Chantier.findByIdAndUpdate(id, req.body, (err, chantier) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).json('modification effectu?e')
        }
    })
}

module.exports.deleteService = (req, res) => {
    const id = req.params.id

        Chantier.findByIdAndRemove(id, (err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json('Supprimer')
            }
	})

}
