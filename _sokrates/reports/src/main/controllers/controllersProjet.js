//const MyConst = require("../helpers/constant.helper")
const Chantier  = require("../models/Projet")





module.exports.getProjet = async function(req, res){
    try{
        
        let chantier = await Chantier.find().sort({"createdAt": -1}).populate('user_id');

       
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


module.exports.addProjet = (req, res) => {

        const chantier = new Chantier(req.body)
        chantier.save((err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json('Success')
            }
	})

}


module.exports.updateImage = async function(req, res){
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


module.exports.updateProjet = async function(req, res){
    let id = req.params.id;
    try{
       
            let projet  = await Chantier.find({"_id": id});
        
            if(!projet){
                    return res.status(404).send(new Error('Pas de donn�es '));
                }else{
                    projet[0].name = req.body.name;
                    projet[0].pays = req.body.pays;
                    projet[0].description = req.body.description;
                    projet[0].ville = req.body.ville;
                    projet[0].longitude = req.body.longitude;
                    projet[0].latitude= req.body.latitude;
                    projet[0].quartier = req.body.quartier;
                    projet[0].user_id = req.body.user_id;
                   projet[0].images = req.body.images;
                   
                   
                
                    projet[0].save();
                    return res.status(200).json('Modification effectu�e');
                }
       
    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}


module.exports.deleteProjet = (req, res) => {
    const id = req.params.id

        Chantier.findByIdAndRemove(id, (err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json("Supression effectuée");
            }
	})

}
