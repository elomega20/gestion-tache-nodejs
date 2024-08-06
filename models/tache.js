const mongoose = require('mongoose');

const tacheSchema = mongoose.Schema({
    nomTache: { type: String, required: true },
    description: { type: String, required: true },
    priorite: { type: String, required: true },
    echeance: { type: String, required: true },
    status: { type: String, required: true },
    responsable: { type: String, required: true }
});

module.exports = mongoose.model('Tache', tacheSchema);