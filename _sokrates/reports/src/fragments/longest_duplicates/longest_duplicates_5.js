controllers/userController.js [96:150]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/userControllers.js [1413:1467]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



