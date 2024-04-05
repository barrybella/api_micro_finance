var Pointage = require('../models/Pointage');

module.exports.addPointage = async function (req, res) {
    try {

        let pointage = Pointage.insertMany(req.body);

        if (pointage) {
            return res.status(200).json(pointage);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.allPointage = async function (req, res) {
    try {
        // let pointages = await Pointage.find({}).populate('flotte_id');
        
        let pointages = await Pointage.aggregate([
            {$unwind: "$flotte_id"},
            { $match: {"delete": 0}}, 
            {$group : {"_id": "$flotte_id"}},
            {
                $lookup: {
                    from: "flotes",
                    localField: "_id",
                    foreignField: "_id",
                    as: "flotte_doc"
                }
            }
        ]);
        if (pointages) {
            return res.status(200).json(pointages);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}


module.exports.getPointage = async function (req, res) {
    idPointage = req.params.idPointage; 
    try {
        let pointage = await Pointage.find({'_id': idPointage}).populate('flotte_id');

        if (pointage[0]) {
            return res.status(200).json(pointage[0]);
        } else {
            return res.status(404).send(new Error('Erreur 404...'))
        }
    } catch (error) {
        return res.status(500).send(new Error('Server Error...'))
    }
}