// proviseurModel.js
const mysql = require('mysql2');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asimut'
});


// Fonction pour récupérer les utilisateurs avec le rôle "proviseur"
exports.getProviseurUser = (callback) => {
    const sql = "SELECT * FROM utilisateur WHERE roles = 'proviseur'";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL :', err);
            return callback(err, null);
        }
        console.log('Résultats de la requête SQL pour les utilisateurs proviseur :', results);
        callback(null, results);
    });
};