const express = require('express');
const router = express.Router();
const tacheCtrl = require('../controllers/tache-controller');

router.post('/', tacheCtrl.creeTache);
router.get('/:id', tacheCtrl.obtenirUneTache);
router.get('/', tacheCtrl.obtenirToutLesTache);

module.exports = router;