const express = require('express');
const router = express.Router();
const tacheCtrl = require('../controllers/tache-controller');

router.post('/', tacheCtrl.creeTache);
router.get('/', tacheCtrl.obtenirToutLesTache);
router.get('/:id', tacheCtrl.obtenirUneTache);
router.put('/:id', tacheCtrl.modifierUneTache);
router.delete('/:id', tacheCtrl.supprimerUneTache);

module.exports = router;