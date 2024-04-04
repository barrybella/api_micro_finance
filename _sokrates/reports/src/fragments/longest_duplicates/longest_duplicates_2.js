controllers/userController.js [236:297]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports.updatePassword = async function(req, res) {
    var id = req.params.id
    try{
        // var us = new User();
        let user = await User.find({"_id": id});
        user[0].setPassword(req.body.newPassword);
        user[0].codes = 0;
        user[0].save();
        if(user){
            return res.status(200).json(user[0]);
        }else{
          return res.status(404).send(new Error('Erreur 404...'));
        }
    }catch(err){
      return res.status(500).send(new Error('Erreur 500...'));

    } 
};
module.exports.updateUser = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].name = req.body.name;
            user[0].email = req.body.email;
            user[0].commune = req.body.commune;
            user[0].ville = req.body.ville;
            user[0].quartier = req.body.quartier;
            user[0].tel = req.body.tel;
            user[0].nameEntreprise = req.body.nameEntreprise;
            user[0].type = req.body.type;
            user[0].devise = req.body.devise;
            user[0].logo= req.body.logo;
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
module.exports.updateUserValidation = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        let valider="confirmer";
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].valider = valider;
            user[0].setPassword(req.body.password);
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/userControllers.js [1617:1678]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
module.exports.updatePassword = async function(req, res) {
    var id = req.params.id
    try{
        // var us = new User();
        let user = await User.find({"_id": id});
        user[0].setPassword(req.body.newPassword);
        user[0].codes = 0;
        user[0].save();
        if(user){
            return res.status(200).json(user[0]);
        }else{
          return res.status(404).send(new Error('Erreur 404...'));
        }
    }catch(err){
      return res.status(500).send(new Error('Erreur 500...'));

    } 
};
module.exports.updateUser = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].name = req.body.name;
            user[0].email = req.body.email;
            user[0].commune = req.body.commune;
            user[0].ville = req.body.ville;
            user[0].quartier = req.body.quartier;
            user[0].tel = req.body.tel;
            user[0].nameEntreprise = req.body.nameEntreprise;
            user[0].type = req.body.type;
            user[0].devise = req.body.devise;
            user[0].logo= req.body.logo;
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}
module.exports.updateUserValidation = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        let valider="confirmer";
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].valider = valider;
            user[0].setPassword(req.body.password);
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



