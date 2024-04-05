//var User = require('../models/User');
var User = require('../models/Utilisateur');




module.exports.updateUsers = async function(req, res){
    let id = req.params.id;
    
    try{
        let user = await User.find({"_id": id});
        
        if(!user){
            return res.status(404).send(new Error('Utilisateur not found 404'));
        }else{
            user[0].name = req.body.name;
            user[0].email = req.body.email;
            user[0].tel = req.body.tel;
            user[0].types = req.body.types;
            user[0].nb_commande = req.body.nb_commande;
            user[0].zone = req.body.zone;
            user[0].save();
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur de server 500...'));
    }
}

module.exports.CommandeByFournisseur = async function(req, res){
    let fournisseur="Fournisseur";
    try{
        let users = await User.find({"role": fournisseur}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.allUsersFi = async function(req, res){
    let facturation="Facturation";
    try{
        let users = await User.find({"role": facturation}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersF = async function(req, res){
    let fournisseur="Fournisseur";
    try{
        let users = await User.find({"role": fournisseur}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersS = async function(req, res){
    let distributeur="Sadmin";
    try{
        let users = await User.find({"role": distributeur}).sort({"createdAt": -1});
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsersD = async function(req, res){
    let distributeur="Distributeur";
    try{
        let users = await User.find({"role": distributeur}).sort({"createdAt": -1}).populate('pointage_id');
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.allUsers = async function(req, res){
    try{
        let users = await User.find({}).sort({"createdAt": -1});
        console.log("distributeur",users);
        if(!users){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(users);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.RevoqueAutoriser = async function(req, res){
    id = req.params.id;
    try{
        let user = await User.remove({"_id": id});
       
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.Autoriser = async function(req, res){
    id = req.params.id;
    try{
        let user = await User.find({"_id": id});
        user[0].active = 0;
        user[0].save();
        if(!user[0]){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.getUserById = async function(req, res){
    let id = req.params.id;

    try{
        let user = await User.find({"_id": id});
      
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user[0]);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}

module.exports.telExist = async function(req, res){
    let tel = req.params.tel;
    try{
        let user = await User.find({"tel": tel});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}


module.exports.emailExist = async function(req, res){
    let email = req.params.email;
    try{
        let user = await User.find({"email": email});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}


module.exports.emailOrTelExist = async function(req, res){
    let value = req.params.value;
    try{
        let user = await User.find({ $or: [ { "tel": value }, { "email": { "$eq": value} } ] });
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}
module.exports.CodeExist = async function(req, res){
    let value = req.params.value;
    try{
        let user = await User.find({"codes": value});
        if(!user){
            return res.status(404).send(new Error('Érror 404 data note found...'));
        }else{
            return res.status(200).json(user);
        }

    }catch(err){
        return res.status(500).send(new Error('Erreur 500...'));
    }
}


module.exports.setRamdom = async function(req, res){
    let tel = req.params.tel;
    
}
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
    }
}

