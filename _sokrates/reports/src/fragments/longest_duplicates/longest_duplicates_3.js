controllers/userController.js [159:227]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/userControllers.js [1511:1579]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



