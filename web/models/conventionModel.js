// conventionModel.js
const mysql = require('mysql2');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asimut'
});

// Fonction pour insérer une convention dans la table stage
exports.insererConvention = function (donnees, callback) {
    const sql = 'INSERT INTO stage SET ?';
    connection.query(sql, donnees, callback);
};

// Fonction pour récupérer toutes les moyennes depuis la table "utilisateur"
exports.recupererConvention = function (callback) {
    const sql = 'SELECT * FROM stage';
    connection.query(sql, callback);
};

// Fonction pour supprimer une convention de la table stage
exports.supprimerConvention = function (conventionId, callback) {
    const sql = 'DELETE FROM stage WHERE id = ?';
    connection.query(sql, [conventionId], callback);
};

exports.modifierConvention = function (conventionId, updatedData, callback) {
    const sql = 'UPDATE stage SET ? WHERE id = ?';
    connection.query(sql, [updatedData, conventionId], callback);
};

