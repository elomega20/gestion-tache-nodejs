const Tache = require('../models/tache');

exports.creeTache = (req, res) => {
    const tache = new Tache({
        nomTache: req.body.nomTache,
        description: req.body.description,
        priorite: req.body.priorite,
        echeance: req.body.echeance,
        status: req.body.status,
        responsable: req.body.responsable
    });
    tache.save().then(
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

exports.obtenirToutLesTache = (req, res) => {
    Tache.find().then(
        (taches) => {
            res.status(200).json(taches);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};


exports.modifierUneTache = (req, res) => {
    const tache = new Tache({
        _id: req.params.id,
        nomTache: req.body.nomTache,
        description: req.body.description,
        priorite: req.body.priorite,
        echeance: req.body.echeance,
        status: req.body.status,
        responsable: req.body.responsable
    });
    Tache.updateOne({_id: req.params.id}, tache).then(
        () => {
            res.status(201).json({
                message: 'tache modifier avec success!'
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

exports.supprimerUneTache = (req, res) => {
    Tache.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'tache supprimer avec success!'
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