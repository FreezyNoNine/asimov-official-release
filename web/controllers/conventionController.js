// conventionController.js
const userModel = require('../models/userModel');
const conventionModel = require('../models/conventionModel');

exports.insererConvention = (req, res) => {
    const donnees = {
        nomEntreprise: req.body.nom_entreprise,
        contactEntreprise: req.body.contact,
        nbLettreEnvoye: req.body.lettres_envoyees,
        nbLettreRecu: req.body.lettres_recues,
        dateEntretien: req.body.date_entretien,
        resultat: req.body.resultat,
        id_utilisateur: req.body.id_utilisateur
    };

    // Traiter l'insertion de la convention dans la base de données
    conventionModel.insererConvention(donnees, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de la convention :', err);
            res.status(500).send('Erreur lors de l\'insertion de la convention');
        } else {
            // Une fois l'insertion terminée, on peut envoyer la réponse
            res.send('Convention insérée avec succès');
        }
    });
};

exports.showConventionPage = (req, res) => {
    const user = req.session.user;

    // Vérifier si l'utilisateur est connecté
    if (!user) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        return res.redirect('/connexion');
    }

    if (req.session.user && req.session.user.roles.includes('secretaire')) {
        res.render('convStage', { user: user });
    } else {
        res.redirect('/');
    }
}

exports.showStatusConventionPage = (req, res) => {
    const user = req.session.user;
    const role = req.session.role;

    // Vérifier si l'utilisateur est connecté
    if (!user) {
        // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
        return res.redirect('/connexion');
    }

    if (req.session.user && req.session.user.roles.includes('proviseur')) {
        conventionModel.recupererConvention((err, stages) => {
            if(err) {
                console.error('Erreur lors de la récupération des conventions : ', err);
                return res.status(500).send('Erreur lors de la récupération des conventions');
            }
            res.render('statusStage', { user: user, stages: stages });
        })
    } else {
        res.redirect('/');
    }
}

exports.supprimerConvention = (req, res) => {
    const conventionId = req.params.id;
    conventionModel.supprimerConvention(conventionId, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de la convention :', err);
            res.status(500).send('Erreur lors de la suppression de la convention');
        } else {
            res.redirect('/statusStage'); // Rediriger vers la page de statut après la suppression
        }
    });
};

exports.modifierConventionPage = (req, res) => {
    const conventionId = req.params.id;
    conventionModel.recupererConventionParId(conventionId, (err, convention) => {
        if (err) {
            console.error('Erreur lors de la récupération de la convention à modifier :', err);
            res.status(500).send('Erreur lors de la récupération de la convention à modifier');
        } else {
            res.render('modifierConvention', { convention: convention });
        }
    });
};

exports.modifierConvention = (req, res) => {
    const conventionId = req.params.id;
    const updatedData = {};

    // Vérifier chaque champ et l'ajouter à l'objet updatedData s'il n'est pas vide
    if (req.body.nom_entreprise) {
        updatedData.nomEntreprise = req.body.nom_entreprise;
    }
    if (req.body.contact) {
        updatedData.contactEntreprise = req.body.contact;
    }
    if (req.body.lettres_envoyees) {
        updatedData.nbLettreEnvoye = req.body.lettres_envoyees;
    }
    if (req.body.lettres_recues) {
        updatedData.nbLettreRecu = req.body.lettres_recues;
    }
    if (req.body.date_entretien) {
        updatedData.dateEntretien = req.body.date_entretien;
    }
    if (req.body.resultat) {
        updatedData.resultat = req.body.resultat;
    }
    if (req.body.id_utilisateur) {
        updatedData.id_utilisateur = req.body.id_utilisateur;
    }

    // Vérifier si des champs ont été modifiés
    if (Object.keys(updatedData).length === 0) {
        return res.redirect('/statusStage'); // Aucun champ à mettre à jour, redirection
    }

    // Appeler la fonction du modèle pour mettre à jour la convention avec les données modifiées
    conventionModel.modifierConvention(conventionId, updatedData, (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification de la convention :', err);
            res.status(500).send('Erreur lors de la modification de la convention');
        } else {
            res.redirect('/statusStage'); // Rediriger vers la page de statut après la modification
        }
    });
};



exports.modifierConventionPost = (req, res) => {
    const conventionId = req.params.id;
    const updatedData = {
        nomEntreprise: req.body.nom_entreprise,
        contactEntreprise: req.body.contact,
        nbLettreEnvoye: req.body.lettres_envoyees,
        nbLettreRecu: req.body.lettres_recues,
        dateEntretien: req.body.date_entretien,
        resultat: req.body.resultat,
        id_utilisateur: req.body.id_utilisateur
    };

    // Appeler la fonction du modèle pour mettre à jour la convention
    conventionModel.modifierConvention(conventionId, updatedData, (err, result) => {
        if (err) {
            console.error('Erreur lors de la modification de la convention :', err);
            res.status(500).send('Erreur lors de la modification de la convention');
        } else {
            res.redirect('/statusStage'); // Rediriger vers la page de statut après la modification
        }
    });
};
