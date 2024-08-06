const Tache = require('../models/tache');

exports.creeTache = (req, res) => {
    const thing = new Thing({
        nomTache: req.body.nomTache,
        description: req.body.description,
        priorite: req.body.priorite,
        echeance: req.body.echeance,
        status: req.body.status,
        responsable: req.body.responsable
    });
    Tache.save().then(
        () => {
            res.status(201).json({
                message: 'tache cree avec success!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.obtenirUneTache = (req, res) => {
    Tache.findOne({
        _id: req.params.id
    }).then(
        (tache) => {
            res.status(200).json(tache);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};