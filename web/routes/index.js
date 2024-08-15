const express = require('express');
const router = express.Router();
const session = require('express-session');
const authController = require('../controllers/authController');
const moyenneController = require('../controllers/moyenneController');
const eleveController = require('../controllers/eleveController');
const contactController = require('../controllers/contactController');
const savoirPlusControlleur = require('../controllers/savoirPlusController');
const conventionController = require('../controllers/conventionController');
const userModel = require('../models/userModel');

router.use(session({
    secret: 'votre_secret_session',
    resave: false,
    saveUninitialized: true
}));

router.get('/', (req, res) => {
    res.render('accueil', { user: req.session.user });
});

router.get('/connexion', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('connexion');
    }
});


router.post('/deconnexion', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erreur lors de la déconnexion :', err);
            res.status(500).send('Erreur de déconnexion');
        } else {
            res.redirect('/');
        }
    });
});

router.get('/convStage', conventionController.showConventionPage, (req, res) => {
    if (req.session.user && req.session.user.roles.includes('secretaire')) {
        res.render('convStage', { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

router.get('/statusStage', conventionController.showStatusConventionPage, (req, res) => {
    if (req.session.user && req.session.user.roles.includes('proviseur')) {
        res.render('statusStage', { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

router.get('/eleve', eleveController.showMoyennePage, (req, res) => {
    if (req.session.user && req.session.user.roles.includes('secretaire')) {
        res.render('Moyenne', { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

router.get('/moyenne', eleveController.showMoyennePage);
router.post('/login', authController.login);
router.get('/Contact', contactController.showContactPage);
router.get('/Savoir_plus', savoirPlusControlleur.showSavoirPlusPage);
router.post('/insererConvention', conventionController.insererConvention);
router.get('/supprimerConvention/:id', conventionController.supprimerConvention);
router.get('/modifierConvention/:id', conventionController.modifierConvention);
router.post('/modifierConvention/:id', conventionController.modifierConventionPost);

// Route pour gérer l'insertion et la mise à jour d'une moyenne
router.post('/gererMoyenne', (req, res, next) => {
    // Vérifier si l'utilisateur est connecté
    if (req.session.user) {
        const userRoles = req.session.user.roles;
        // Vérifier le rôle de l'utilisateur
        if (userRoles.includes('proviseur')) {
            // Si le rôle est proviseur, passer à l'action suivante (mise à jour)
            req.body.action = 'update';
            next();
        } else if (userRoles.includes('secretaire')) {
            // Si le rôle est secrétaire, passer à l'action suivante (insertion)
            req.body.action = 'insert';
            next();
        } else {
            // Si l'utilisateur n'a pas le rôle approprié, renvoyer une erreur
            res.status(403).send('Vous n\'avez pas les autorisations nécessaires pour gérer les moyennes');
        }
    } else {
        // Si l'utilisateur n'est pas connecté, renvoyer une erreur de connexion
        res.status(401).send('Vous devez être connecté pour gérer les moyennes');
    }
}, moyenneController.gererMoyenne);

// Route pour gérer la suppression de toutes les moyennes d'un élève
router.post('/supprimerMoyennesEleve', (req, res, next) => {
    // Vérifier si l'utilisateur est connecté
    if (req.session.user) {
        const userRoles = req.session.user.roles;
        // Vérifier le rôle de l'utilisateur
        if (userRoles.includes('proviseur')) {
            // Si le rôle est proviseur, passer à l'action de suppression
            next();
        } else {
            // Si l'utilisateur n'a pas le rôle approprié, renvoyer une erreur
            res.status(403).send('Vous n\'avez pas les autorisations nécessaires pour supprimer toutes les moyennes');
        }
    } else {
        // Si l'utilisateur n'est pas connecté, renvoyer une erreur de connexion
        res.status(401).send('Vous devez être connecté pour supprimer toutes les moyennes');
    }
}, moyenneController.supprimerMoyennesEleve);

module.exports = router;
