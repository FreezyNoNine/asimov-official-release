// Importez le module mysql2
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'asimut'
});

// Fonction pour insérer une moyenne dans la table "utilisateur"
exports.insererMoyenne = function (donneesMoyenne, donneesEleve, callback) {
    console.log("Données de l'élève :", donneesEleve);
    console.log("Données à insérer :", donneesMoyenne);
    const { id } = donneesEleve; // Récupérer l'ID de l'élève

    // Vérifier si l'ID de l'élève est défini
    if (!id) {
        const err = new Error("ID de l'élève non spécifié");
        err.statusCode = 400; // Code d'erreur de mauvaise requête
        return callback(err, null);
    }

    // Vérifier si l'élève a déjà une moyenne pour le semestre choisi
    const sqlCheck = `SELECT * FROM utilisateur WHERE id = ? AND ${Object.keys(donneesMoyenne)[0]} IS NOT NULL`;
    connection.query(sqlCheck, [id], (err, rows) => {
        if (err) {
            return callback(err, null);
        }

        // Si l'élève n'a pas encore de moyenne pour ce semestre, insérez la nouvelle moyenne
        if (rows.length === 0) {
            const sqlInsert = 'UPDATE utilisateur SET ? WHERE id = ?';
            connection.query(sqlInsert, [donneesMoyenne, id], callback);
        } else {
            // Si l'élève a déjà une moyenne pour ce semestre, retournez une erreur
            const err = new Error("L'élève a déjà une moyenne pour ce semestre");
            err.statusCode = 400; // Code d'erreur de mauvaise requête
            callback(err, null);
        }
    });
};

// Fonction pour récupérer toutes les moyennes depuis la table "utilisateur"
exports.recupererMoyennes = function (callback) {
    const sql = 'SELECT * FROM utilisateur WHERE roles= "eleve"';
    connection.query(sql, callback);
};

// Fonction pour mettre à jour une moyenne dans la table "utilisateur"
exports.updateMoyenne = function (donneesMoyenne, donneesEleve, callback) {
    console.log("Données de l'élève :", donneesEleve);
    console.log("Données à mettre à jour :", donneesMoyenne);
    const { id } = donneesEleve; // Récupérer l'ID de l'élève
    // Vérifier si l'ID de l'élève est défini
    if (id) {
        const sql = 'UPDATE utilisateur SET ? WHERE id = ?';
        connection.query(sql, [donneesMoyenne, id], callback);
    } else {
        // Si l'ID de l'élève n'est pas défini, renvoyer une erreur
        const err = new Error('ID de l\'élève non spécifié');
        err.statusCode = 400; // Code d'erreur de mauvaise requête
        callback(err, null);
    }
};

// Fonction pour supprimer toutes les moyennes d'un élève
exports.supprimerMoyennesEleve = function (idEleve, callback) {
    const sql = 'UPDATE utilisateur SET moyenneSemestre1 = NULL, moyenneSemestre2 = NULL WHERE id = ?';
    connection.query(sql, [idEleve], callback);
};

