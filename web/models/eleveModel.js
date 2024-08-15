// eleveModel.js
const mysql = require('mysql2');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asimut'
});


// Fonction pour récupérer les utilisateurs avec le rôle "eleve"
exports.getEleveUsers = (callback) => {
    const sql = "SELECT * FROM utilisateur WHERE roles = 'eleve'";
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL :', err);
            return callback(err, null);
        }
        console.log('Résultats de la requête SQL pour les utilisateurs eleve :', results);
        callback(null, results);
    });
};