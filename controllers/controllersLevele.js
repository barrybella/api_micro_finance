const Chantier  = require("../models/Levele")





module.exports.getLevele = async function(req, res){
     let id = req.params.id;
    try{

        let chantier = await Chantier.find({"projet_id":id}).sort({"createdAt": -1}).populate('user_id');


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


module.exports.addLevele = (req, res) => {

        const chantier = new Chantier(req.body)
        chantier.save((err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).json('Enregistrement effectué')
            }
	})

}


module.exports.updateLevele = async function(req, res){
    let id = req.params.id;
     try{
         let levele  = await Chantier.find({"_id": id});
        
         levele[0].name = req.body.name;
            levele[0].description = req.body.description;
            levele[0].pourcentage = req.body.pourcentage;
            levele[0].openDate = req.body.openDate;
           levele[0].closeDate = req.body.closeDate;
            levele[0].user_id = req.body.user_id;
           levele[0].levele_id = req.body.levele_id;
         levele[0].save();
 
         if  (levele[0]) {
             return res.status(200).json('Modification effectuée');
         } else {
             return res.status(404).send(new Error('Erreur 404...'))
         }
     } catch (error) {
         return res.status(500).send(new Error('Server Error...'))
     }
 }

module.exports.deleteLevele = async function(req, res){
    id = req.params.id;
    try{
        let chantier = await Chantier.remove({"_id": id});

         if (chantier) {
            return res.status(200).json("Suppression effectu�e");
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}
