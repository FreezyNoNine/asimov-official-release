const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asimut'
});

exports.checkCredentials = (username, password, callback) => {
    const sql = "SELECT * FROM utilisateur WHERE username = ? AND pass = ?";
    connection.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL :', err);
            return callback(err, null);
        }
        console.log('Résultats de la requête SQL :', results);
        callback(null, results);
    });
};

exports.insererConvention = (donnees, callback) => {
    const sql = 'INSERT INTO stage SET ?';
    connection.query(sql, donnees, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de la convention :', err);
            return callback(err, null);
        }
        console.log('Convention insérée avec succès');
        callback(null, result);
    });
};

exports.insererMoyenne = (donneesMoyenne, donneesEleve, callback) => {
    const sql = 'INSERT INTO utilisateur SET ?';
    connection.query(sql, [donneesMoyenne, donneesEleve], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'insertion de la moyenne :', err);
            return callback(err, null);
        }
        console.log('Moyenne insérée avec succès');
        callback(null, result);
    });
};