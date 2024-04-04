//const MyConst = require("../helpers/constant.helper")
const Chantier  = require("../models/Chantier")




module.exports.all = (req, res) => {
    Chantier.find({}, (err, chantiers) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(chantiers)
        }
    })
}



module.exports.add = (req, res) => {
    
        const chantier = new Chantier(req.body)
        chantier.save((err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(chantier)
            }
        })
    
}



module.exports.update = (req, res) => {
    const id = req.params.id
    Chantier.findByIdAndUpdate(id, req.body, (err, chantier) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(chantier)
        }
    })
}



module.exports.delete = (req, res) => {
    const id = req.params.id
  
        Chantier.findByIdAndRemove(id, (err, chantier) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(chantier)
            }
        })
   
}
