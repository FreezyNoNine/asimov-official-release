const userModel = require('../models/userModel');

exports.login = (req, res) => {
    const { username, password } = req.body;
    userModel.checkCredentials(username, password, (err, results) => {
        if (err) {
            return res.status(500).send('Erreur de serveur');
        }
        if (results.length > 0) {
            const user = results[0];
            req.session.user = user;
            return res.redirect('/');
        } else {
            return res.render('connexion', { loginFailed: true });
        }
    });
};
