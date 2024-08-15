const userModel = require('../models/userModel');
const moyenneModel = require('../models/moyenneModel');

// Fonction pour insérer ou mettre à jour une moyenne
exports.gererMoyenne = (req, res) => {
    const action = req.body.action; // Récupérer l'action à effectuer depuis le formulaire
    const choixSemestre = req.body.choixSemestre;
    const moyenne = req.body.moyenne;
    const choixEleve = req.body.choixEleve;

    // Vérifier l'action à effectuer
    if (action === 'insert') {
        // Insertion de la moyenne
        const donneesMoyenne = {
            [choixSemestre]: moyenne
        };
        const donneesEleve = {
            id: choixEleve
        };

        moyenneModel.insererMoyenne(donneesMoyenne, donneesEleve, (err, result) => {
            if (err) {
                console.error('Erreur lors de l\'insertion de la moyenne :', err);
                if (err.statusCode === 403) {
                    res.status(403).send('Vous n\'avez pas l\'autorisation d\'insérer des moyennes');
                } else {
                    res.status(500).send('Erreur lors de l\'insertion de la moyenne');
                }
            } else {
                res.send('Moyenne insérée avec succès');
            }
        });
    } else if (action === 'update') {
        // Mise à jour de la moyenne
        const donneesMoyenne = {
            [choixSemestre]: moyenne
        };
        const donneesEleve = {
            id: choixEleve
        };

        moyenneModel.updateMoyenne(donneesMoyenne, donneesEleve, (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour de la moyenne :', err);
                if (err.statusCode === 403) {
                    res.status(403).send('Vous n\'avez pas l\'autorisation de mettre à jour des moyennes');
                } else {
                    res.status(500).send('Erreur lors de la mise à jour de la moyenne');
                }
            } else {
                res.send('Moyenne mise à jour avec succès');
            }
        });
    }
}

// Contrôleur pour supprimer les moyennes de l'élève
exports.supprimerMoyennesEleve = (req, res) => {
    const idEleve = req.body.idEleve; // Récupérer l'ID de l'élève depuis la requête

    // Appeler la fonction du modèle pour supprimer les moyennes de l'élève
    moyenneModel.supprimerMoyennesEleve(idEleve, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression des moyennes de l\'élève :', err);
            res.status(500).send('Erreur lors de la suppression des moyennes de l\'élève');
        } else {
            res.send('Toutes les moyennes de l\'élève ont été supprimées avec succès');
        }
    });
};


