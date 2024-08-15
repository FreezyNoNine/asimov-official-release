// eleveController.js
const eleveModel = require('../models/eleveModel');
const moyenneModel = require('../models/moyenneModel');

exports.showMoyennePage = (req, res) => {
    const user = req.session.user;

    // Si l'utilisateur n'est pas connecté, le rediriger vers la page de connexion
    if (!user) {
        return res.redirect('/connexion');
    }

    // Vérifier si l'utilisateur est secrétaire, professeur, proviseur ou élève
    const isSecretariat = user.roles.includes('secretaire');
    const isProfesseur = user.roles.includes('professeur');
    const isProviseur = user.roles.includes('proviseur');
    const isEleve = user.roles.includes('eleve');

    // Si l'utilisateur est secrétaire, professeur, proviseur ou élève, récupérer les données nécessaires et rendre la vue
    if (isSecretariat || isProfesseur || isProviseur || isEleve) {
        // Charger les données nécessaires depuis la base de données
        eleveModel.getEleveUsers((err, eleveUsers) => {
            if (err) {
                console.error('Erreur lors de la récupération des utilisateurs élève :', err);
                return res.status(500).send('Erreur lors de la récupération des utilisateurs élève');
            }

            moyenneModel.recupererMoyennes((err, moyennes) => {
                if (err) {
                    console.error('Erreur lors de la récupération des moyennes :', err);
                    return res.status(500).send('Erreur lors de la récupération des moyennes');
                }
                res.render('moyenne', { user: user, eleveUsers: eleveUsers, moyennes: moyennes });
            });
        });
    } else {
        // Si l'utilisateur n'est ni secrétaire, ni professeur, ni proviseur, ni élève, le rediriger vers une autre page
        res.redirect('/');
    }
};
