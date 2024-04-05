controllers/categorieControllers.js [268:303]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}

module.exports.echantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
          produit[0].echantillon = 1;
          produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.Activechantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
        produit[0].echantillon = 0;
        produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/produitControllers.js [791:825]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
             } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.echantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
          produit[0].echantillon = 1;
          produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
module.exports.Activechantillon = async function(req, res){
    let id = req.params.id;
    try{
        let produit = await Produit.find({"_id": id, "delete": 0});
        produit[0].echantillon = 0;
        produit[0].save();
         if (produit[0]) {
            return res.status(200).json(produit[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



