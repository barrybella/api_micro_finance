controllers/controllersActiviter.js [163:196]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



controllers/controllersActiviter.js [195:228]:
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
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
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



